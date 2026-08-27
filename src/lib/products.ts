"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "./authOptions";
import { collections, dbConnect } from "./dbConnect";
import { ObjectId } from "mongodb";

type ProductsType = {
  name: string;
  sku?: string;
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
    };

    if (!userDoc) {
      const result = await productsCollection.insertOne({
        email,
        image,
        categories: [
          {
            category: categoryName, // 🔧 হার্ডকোড না, আসল category name
            products: [newProduct],
          },
        ],
        createdAt: now,
        updatedAt: now,
      });

      return {
        success: true,
        message: "Product added successfully",
        insertedId: result.insertedId.toString(), // 🔧 ObjectId → plain string
      };
    }

    // ---------- কেস ২: user document আছে, এই category আছে কিনা দেখো ----------
    const categoryEntry = userDoc.categories?.find(
      (c: any) => c.category.toLowerCase() === categoryName.toLowerCase(),
    );

    // কেস ২.১: category নেই → নতুন category push করো
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
      // ✅ আগে থেকে থাকলে → nested product UPDATE করো
      await productsCollection.updateOne(
        { email },
        {
          $set: {
            "categories.$[cat].products.$[prod].name": products.name,
            "categories.$[cat].products.$[prod].costPrice": products.costPrice,
            "categories.$[cat].products.$[prod].sellPrice": products.sellPrice,
            "categories.$[cat].products.$[prod].stockQuantity":
              products.stockQuantity,
            "categories.$[cat].products.$[prod].updatedAt": now,
            updatedAt: now,
          },
        },
        {
          arrayFilters: [
            { "cat.category": categoryEntry.category },
            { "prod._id": existingProduct._id },
          ],
        },
      );

      return { success: true, message: "Product updated successfully" };
    } else {
      // ✅ category আছে কিন্তু SKU নতুন → সেই category এর products array তে push করো
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
