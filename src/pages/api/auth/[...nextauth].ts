import NextAuth from "next-auth";
import Email from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";
import { FirestoreAdapter } from "../../../../node_modules/@next-auth/firebase-adapter";

export default NextAuth({
  adapter: FirestoreAdapter(),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    Email({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: Number(process.env.EMAIL_SERVER_PORT),
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
});
