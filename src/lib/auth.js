"use server";
import { getServerSession } from "next-auth";
import { collections, dbConnect } from "./dbConnect";
import bcrypt from "bcryptjs";
import { authOptions } from "./authOptions";

export const postUser = async (payload) => {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== "admin") {
      return {
        success: false,
        message: "Unauthorized: Only admin can register users",
      };
    }
    const usersCollection = await dbConnect(collections.USERS);
    const email = { email: payload.email };
    const user = await usersCollection.findOne(email);
    if (user) {
      return {
        success: false,
        message: "User already exist",
      };
    }
    const encryptPass = await bcrypt.hash(payload.password, 10);
    const newUser = {
      name: payload.name,
      email: payload.email,
      contactNo: payload.phone,
      image: payload.image,
      encryptPass,
      role: "member",
      date: new Date().toISOString(),
    };
    const results = await usersCollection.insertOne(newUser);
    if (results.acknowledged) {
      return {
        acknowledged: true,
        insertedId: results.insertedId.toString(),
      };
    }
  } catch (error) {
    console.log("Form error", error);
    return error.message;
  }
};


