"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "./authOptions";
import { collections, dbConnect } from "./dbConnect";

type ProductsType = {
  name: string;
  sku: number;
  categoryId: string;
  costPrice: number;
  sellPrice: number;
  stockQuantity: number;
};
export const addProducts = async (products: ProductsType) => {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return {
      success: false,
      message: "Unauthorized: Only logged-in user can add products",
    };
  }

  const { email, image } = session.user;

  const productsCollection = await dbConnect(collections.PRODUCTS);

  const existingProduct = await productsCollection.findOne({
    email: email,
    sku: products.sku,
  });

  if (existingProduct) {
    const result = await productsCollection.updateOne(
      { _id: existingProduct._id },
      {
        $set: {
          ...products,
          updatedAt: new Date(),
        },
      },
    );

    return {
      success: true,
      message: "Product updated successfully",
      data: result,
    };
  } else {
    // ✅ না থাকলে → নতুন করে INSERT করো
    const newProduct = {
      email,
      image,
      ...products,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await productsCollection.insertOne(newProduct);

    return {
      success: true,
      message: "Product added successfully",
      data: result,
    };
  }
};
