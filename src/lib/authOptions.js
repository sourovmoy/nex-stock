import CredentialsProvider from "next-auth/providers/credentials";
import { collections, dbConnect } from "./dbConnect";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email", placeholder: "example@.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        const usersCollection = await dbConnect(collections.USERS);
        const user = await usersCollection.findOne({ email });

        if (!user) return null;
        const isMatch = await bcrypt.compare(password, user.encryptPass);

        if (!isMatch) return null;

        return {
          id: user._id.toString(),
          name: user.name,
          image: user.image,
          email: user.email,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      try {
        const usersCollection = await dbConnect(collections.USERS);
        const isUser = await usersCollection.findOne({ email: user.email });

        if (!isUser) {
          const newUser = {
            ...user,
            role: "staff",
            createdAt: new Date().toISOString(),
          };
          await usersCollection.insertOne(newUser);
          user.role = "staff";
        } else {
          user.role = isUser.role;
          user.image = isUser.image;
        }
        return true;
      } catch (error) {
        console.log(error.message);
        return false;
      }
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.image = user.image;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role;
      session.user.image = token.image;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
