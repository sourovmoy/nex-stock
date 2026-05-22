import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { collections, dbConnect } from "./dbConnect";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
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

        if (!user) {
          return {
            message: "No users",
            results: null,
          };
        }
        const isMatch = await bcrypt.compare(password, user.encryptPass);

        if (!isMatch) {
          return null;
        }

        return user;
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      try {
        console.log({ user, account, profile, email, credentials });

        const newUser = {
          ...user,
          provider: account.provider,
          providerId: account.providerAccountId,
          role: "user",
          createdAt: new Date().toISOString(),
        };
        const query = { email: user.email };
        const usersCollection = await dbConnect(collections.USERS);
        const isUser = await usersCollection.findOne(query);

        if (!isUser) {
          const createUser = await usersCollection.insertOne(newUser);
          return true;
        }
        return true;
      } catch (error) {
        console.log(error.message);
        return false;
      }
    },
    // async redirect({ url, baseUrl }) {
    //   return baseUrl;
    // },
    async session({ session, token, user }) {
      session.user.role = token.role;
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
