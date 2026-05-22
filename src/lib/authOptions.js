import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

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
        // const usersCollection = await dbConnect(collections.USERS);
        // const user = await usersCollection.findOne({ email });

        // if (!user) {
        //   return {
        //     message: "No users",
        //     results: null,
        //   };
        // }
        // const isMatch = await bcrypt.compare(password, user.encryptPass);

        // if (!isMatch) {
        //   return null;
        // }

        console.log(email, password);
        return { email, password };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};
