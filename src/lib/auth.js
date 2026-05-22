"use server";
import { collections, dbConnect } from "./dbConnect";
import bcrypt from "bcryptjs";

export const postUser = async (payload) => {
  try {
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
      contactNo: payload.contactNo,
      image: payload.image,
      encryptPass,
      role: "staff",
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
