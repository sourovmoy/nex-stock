import GoogleProvider from "next-auth/providers/google";
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
          email: user.email,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      try {
        const query = { email: user.email };
        const usersCollection = await dbConnect(collections.USERS);
        const isUser = await usersCollection.findOne(query);
        if (!isUser) {
          const newUser = {
            ...user,
            provider: account.provider,
            providerId: account.providerAccountId,
            role: "staff",
            createdAt: new Date().toISOString(),
          };
          await usersCollection.insertOne(newUser);
          user.role = "staff";
        } else {
          user.role = isUser.role;
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
