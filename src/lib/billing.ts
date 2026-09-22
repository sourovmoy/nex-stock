"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "./authOptions";
import { collections, dbConnect } from "./dbConnect";
import { ObjectId } from "mongodb";

type SaleItemInput = {
  productId: string;
  category: string;
  name: string;
  quantity: number;
  price: number;
};

type CreateSalePayload = {
  items: SaleItemInput[];
  discount?: number;
  paidAmount?: number;
  customerName?: string;
};

const getUser = async () => {
  return await getServerSession(authOptions);
};

export const createSale = async (payload: CreateSalePayload) => {
  try {
    const session = await getUser();

    if (!session || !session.user) {
      return { success: false, message: "Unauthorized" };
    }

    const { email } = session.user;

    if (!payload.items || payload.items.length === 0) {
      return { success: false, message: "Cart is empty" };
    }

    const productsCollection = await dbConnect(collections.PRODUCTS);
    const userDoc = await productsCollection.findOne({ email });

    if (!userDoc || !userDoc.categories) {
      return { success: false, message: "No products found" };
    }

    for (const item of payload.items) {
      const categoryEntry = userDoc.categories.find(
        (c: any) => c.category === item.category,
      );
      const product = categoryEntry?.products.find(
        (p: any) => p._id.toString() === item.productId,
      );

      if (!product) {
        return { success: false, message: "Product not found" };
      }
      if (product.stockQuantity < item.quantity) {
        return {
          success: false,
          message: `Not enough stock for ${product.name} (available: ${product.stockQuantity})`,
        };
      }
    }

    const now = new Date();

    for (const item of payload.items) {
      await productsCollection.updateOne(
        { email, "categories.category": item.category },
        {
          $inc: {
            "categories.$[cat].products.$[prod].stockQuantity": -item.quantity,
          },
          $set: {
            "categories.$[cat].products.$[prod].updatedAt": now,
            updatedAt: now,
          },
        },
        {
          arrayFilters: [
            { "cat.category": item.category },
            { "prod._id": new ObjectId(item.productId) },
          ],
        },
      );
    }

    const itemsWithSubtotal = payload.items.map((item) => ({
      ...item,
      subtotal: item.price * item.quantity,
    }));
    const subtotal = itemsWithSubtotal.reduce(
      (sum, item) => sum + item.subtotal,
      0,
    );
    const discount = payload.discount ?? 0;
    const totalAmount = Math.max(subtotal - discount, 0);

    const paidAmount = payload.paidAmount ?? totalAmount;
    const dueAmount = Math.max(totalAmount - paidAmount, 0);
    const status = dueAmount > 0 ? "due" : "completed";

    const salesCollection = await dbConnect(collections.SALES);

    const salesCount = await salesCollection.countDocuments({ email });
    const invoiceNo = `INV-${String(salesCount + 1).padStart(4, "0")}`;

    const result = await salesCollection.insertOne({
      email,
      invoiceNo,
      customerName: payload.customerName?.trim() || "Walk-in Customer",
      items: itemsWithSubtotal,
      subtotal,
      discount,
      totalAmount,
      paidAmount,
      dueAmount,
      status,
      createdAt: now,
    });

    return {
      success: true,
      message: "Sale completed successfully",
      saleId: result.insertedId.toString(),
      invoiceNo,
    };
  } catch (error) {
    console.log(
      "createSale error:",
      error instanceof Error ? error.message : error,
    );
    return {
      success: false,
      message: "Something went wrong during checkout",
    };
  }
};

export const getSalesHistory = async () => {
  try {
    const session = await getUser();

    if (!session || !session.user) {
      return { success: false, message: "Unauthorized", sales: [] };
    }

    const { email } = session.user;
    const salesCollection = await dbConnect(collections.SALES);

    const sales = await salesCollection
      .find({ email })
      .sort({ createdAt: -1 })
      .toArray();

    return {
      success: true,
      sales: sales.map((s: any) => ({
        _id: s._id.toString(),
        invoiceNo: s.invoiceNo,
        customerName: s.customerName || "Walk-in Customer",
        totalAmount: s.totalAmount,
        dueAmount: s.dueAmount ?? 0,
        status: s.status || "completed",
        createdAt: s.createdAt ? new Date(s.createdAt).toISOString() : null,
      })),
    };
  } catch (error) {
    console.log(
      "getSalesHistory error:",
      error instanceof Error ? error.message : error,
    );
    return {
      success: false,
      message: "Failed to load sales history",
      sales: [],
    };
  }
};

export const getSaleById = async (saleId: string) => {
  try {
    const session = await getUser();

    if (!session || !session.user) {
      return { success: false, message: "Unauthorized" };
    }

    const { email } = session.user;
    const salesCollection = await dbConnect(collections.SALES);

    const sale = await salesCollection.findOne({
      _id: new ObjectId(saleId),
      email,
    });

    if (!sale) {
      return { success: false, message: "Invoice not found" };
    }

    return {
      success: true,
      sale: {
        _id: sale._id.toString(),
        invoiceNo: sale.invoiceNo,
        customerName: sale.customerName || "Walk-in Customer",
        items: sale.items,
        subtotal: sale.subtotal,
        discount: sale.discount ?? 0,
        totalAmount: sale.totalAmount,
        paidAmount: sale.paidAmount,
        dueAmount: sale.dueAmount ?? 0,
        status: sale.status || "completed",
        createdAt: sale.createdAt
          ? new Date(sale.createdAt).toISOString()
          : null,
      },
    };
  } catch (error) {
    console.log(
      "getSaleById error:",
      error instanceof Error ? error.message : error,
    );
    return { success: false, message: "Failed to load invoice" };
  }
};
