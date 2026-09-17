"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "./authOptions";
import { collections, dbConnect } from "./dbConnect";
import { ObjectId } from "mongodb";

type SaleItem = {
  productId: string;
  category: string;
  quantity: number;
  price: number;
};

type CreateSalePayload = {
  items: SaleItem[];
  totalAmount: number;
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

    // চেক আগে করে নেওয়া — কোনো stock কম থাকলে পুরো sale-ই বাতিল হবে,
    // কিছু item deduct হয়ে কিছু না হওয়ার মতো half-done state হবে না।
    for (const item of payload.items) {
      const categoryEntry = userDoc.categories.find(
        (c: any) => c.category === item.category,
      );
      const product = categoryEntry?.products.find(
        (p: any) => p._id.toString() === item.productId,
      );

      if (!product) {
        return {
          success: false,
          message: `Product খুঁজে পাওয়া যায়নি`,
        };
      }
      if (product.stockQuantity < item.quantity) {
        return {
          success: false,
          message: `${product.name} এর পর্যাপ্ত স্টক নেই (আছে ${product.stockQuantity})`,
        };
      }
    }

    const now = new Date();

    // প্রতিটা item এর জন্য stock কমানো
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

    // Sale record তৈরি — history/reporting এর জন্য
    const salesCollection = await dbConnect(collections.SALES);
    const result = await salesCollection.insertOne({
      email,
      items: payload.items,
      totalAmount: payload.totalAmount,
      createdAt: now,
    });

    return {
      success: true,
      message: "Sale completed successfully",
      saleId: result.insertedId.toString(),
    };
  } catch (error) {
    console.log(
      "createSale error:",
      error instanceof Error ? error.message : error,
    );
    return {
      success: false,
      message: "Checkout করতে সমস্যা হয়েছে",
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
        items: s.items,
        totalAmount: s.totalAmount,
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
      message: "Sales history লোড করতে সমস্যা হয়েছে",
      sales: [],
    };
  }
};
