"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "./authOptions";
import { collections, dbConnect } from "./dbConnect";
import { ObjectId } from "mongodb";

type ProductsType = {
  name: string;
  sku: string;
  categoryId: string;
  costPrice: number;
  sellPrice: number;
  stockQuantity: number;
};

export const addProducts = async (products: ProductsType) => {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return {
        success: false,
        message: "Unauthorized: Only logged-in user can add products",
      };
    }

    const { email, image } = session.user;
    const categoryName = products.categoryId?.trim();

    if (!categoryName) {
      return { success: false, message: "Category is required" };
    }

    const productsCollection = await dbConnect(collections.PRODUCTS);

    const userDoc = await productsCollection.findOne({ email });

    const now = new Date();
    const newProduct = {
      _id: new ObjectId(),
      name: products.name,
      sku: products.sku,
      costPrice: products.costPrice,
      sellPrice: products.sellPrice,
      stockQuantity: products.stockQuantity,
      addedAt: now,
      updatedAt: now,
      priceHistory: [
        {
          lastCostPrice: products.costPrice,
          lastSellPrice: products.sellPrice,
          lastStock: products.stockQuantity,
          newStock: products.stockQuantity,
          addedAt: now,
        },
      ],
    };

    if (!userDoc) {
      const result = await productsCollection.insertOne({
        email,
        image,
        categories: [
          {
            category: categoryName,
            products: [newProduct],
          },
        ],
        createdAt: now,
        updatedAt: now,
      });

      return {
        success: true,
        message: "Product added successfully",
        insertedId: result.insertedId.toString(),
      };
    }

    const categoryEntry = userDoc.categories?.find(
      (c: any) => c.category.toLowerCase() === categoryName.toLowerCase(),
    );

    if (!categoryEntry) {
      await productsCollection.updateOne(
        { email },
        {
          $push: {
            categories: { category: categoryName, products: [newProduct] },
          },
          $set: { updatedAt: now },
        },
      );

      return {
        success: true,
        message: "New category created and product added",
      };
    }

    const existingProduct = categoryEntry.products.find(
      (p: any) => p.sku === products.sku,
    );

    if (existingProduct) {
      const priceChanged =
        existingProduct.costPrice !== products.costPrice ||
        existingProduct.sellPrice !== products.sellPrice;

      const newStockQuantity =
        existingProduct.stockQuantity + Number(products.stockQuantity);

      const updateFields: Record<string, any> = {
        "categories.$[cat].products.$[prod].name": products.name,
        "categories.$[cat].products.$[prod].stockQuantity": newStockQuantity,
        "categories.$[cat].products.$[prod].updatedAt": now,
        updatedAt: now,
      };

      const updateOps: any = { $set: updateFields };

      // দাম বদলালে তবেই price fields + history আপডেট হবে
      if (priceChanged || newStockQuantity) {
        updateFields["categories.$[cat].products.$[prod].costPrice"] =
          products.costPrice;
        updateFields["categories.$[cat].products.$[prod].sellPrice"] =
          products.sellPrice;

        updateOps.$push = {
          "categories.$[cat].products.$[prod].priceHistory": {
            lastCostPrice: products.costPrice,
            lastSellPrice: products.sellPrice,
            lastStock: products.stockQuantity,
            newStock: products.stockQuantity,
            addedAt: now,
          },
        };
      }

      // আগে থেকে থাকলে → nested product UPDATE করো
      await productsCollection.updateOne({ email }, updateOps, {
        arrayFilters: [
          { "cat.category": categoryEntry.category },
          { "prod._id": existingProduct._id },
        ],
      });

      return {
        success: true,
        message: "Product updated successfully",
      };
    } else {
      // category আছে কিন্তু SKU নতুন → সেই category এর products array তে push করো
      await productsCollection.updateOne(
        { email, "categories.category": categoryEntry.category },
        {
          $push: { "categories.$.products": newProduct },
          $set: { updatedAt: now },
        },
      );

      return { success: true, message: "Product added to existing category" };
    }
  } catch (error) {
    console.log("from catch", error instanceof Error ? error.message : error);

    return {
      success: false,
      message: "Something went wrong while adding the product",
    };
  }
};

export const getCategory = async () => {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return [];
    }
    const { email } = session.user;
    const productsCollection = await dbConnect(collections.PRODUCTS);
    const userDoc = await productsCollection.findOne({ email });
    if (!userDoc || !userDoc.categories) {
      return [];
    }
    const categoryNames = userDoc.categories.map((c: any) => ({
      _id: c.category,
      name: c.category,
    }));
    return categoryNames;
  } catch (error) {
    console.log(error.message);
  }
};

export const getProducts = async () => {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return { success: false, message: "Unauthorized", products: [] };
    }

    const { email } = session.user;
    const productsCollection = await dbConnect(collections.PRODUCTS);

    const userDoc = await productsCollection.findOne({ email });

    if (!userDoc || !userDoc.categories) {
      return { success: true, products: [] };
    }

    const flatProducts = userDoc.categories.flatMap((cat: any) =>
      cat.products.map((p: any) => ({
        _id: p._id.toString(),
        name: p.name,
        sku: p.sku,
        category: cat.category,
        costPrice: p.costPrice,
        sellPrice: p.sellPrice,
        stockQuantity: p.stockQuantity,
        previousCostPrice: p.previousCostPrice ?? null,
        previousSellPrice: p.previousSellPrice ?? null,
        addedAt: p.addedAt ? new Date(p.addedAt).toISOString() : null,
        updatedAt: p.updatedAt ? new Date(p.updatedAt).toISOString() : null,
      })),
    );

    flatProducts.sort(
      (a: any, b: any) =>
        new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
    );

    return { success: true, products: flatProducts };
  } catch (error) {
    console.log(
      "getProducts error:",
      error instanceof Error ? error.message : error,
    );
    return {
      success: false,
      message: "Products লোড করতে সমস্যা হয়েছে",
      products: [],
    };
  }
};

export const deleteProduct = async (category: string, productId: string) => {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return { success: false, message: "Unauthorized" };
    }

    const { email } = session.user;
    const productsCollection = await dbConnect(collections.PRODUCTS);

    await productsCollection.updateOne(
      { email, "categories.category": category },
      { $pull: { "categories.$.products": { _id: new ObjectId(productId) } } },
    );

    return { success: true, message: "Product deleted successfully" };
  } catch (error) {
    console.log(
      "deleteProduct error:",
      error instanceof Error ? error.message : error,
    );
    return { success: false, message: "Delete করতে সমস্যা হয়েছে" };
  }
};

export const addCategory = async (category: string) => {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return { success: false, message: "Unauthorized" };
    }

    const { email } = session.user;
    const categoryName = category.trim();

    if (!categoryName) {
      return { success: false, message: "Category name is required" };
    }

    const productsCollection = await dbConnect(collections.PRODUCTS);

    // 🔑 user এর document আছে কিনা আগে দেখো
    const userDoc = await productsCollection.findOne({ email });

    // ---------- কেস ১: user এর document একদমই নেই (তার প্রথম category) ----------
    if (!userDoc) {
      await productsCollection.insertOne({
        email,
        categories: [{ category: categoryName, products: [] }],
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      return { success: true, message: "Category added successfully" };
    }

    // ---------- কেস ২: user document আছে, এই নামে category আগে থেকে আছে কিনা চেক করো ----------
    const existingCategory = userDoc.categories?.find(
      (c: any) => c.category.toLowerCase() === categoryName.toLowerCase(),
    );
    console.log(existingCategory);

    if (existingCategory) {
      return { success: false, message: "এই category আগে থেকেই আছে" };
    }

    // ---------- কেস ৩: category নেই → নতুন category push করো ----------
    await productsCollection.updateOne(
      { email },
      {
        $push: {
          categories: { category: categoryName, products: [] },
        },
        $set: { updatedAt: new Date() },
      },
    );

    return { success: true, message: "Category added successfully" };
  } catch (error) {
    console.log(
      "addCategory error:",
      error instanceof Error ? error.message : error,
    );
    return { success: false, message: "Category add করতে সমস্যা হয়েছে" };
  }
};
