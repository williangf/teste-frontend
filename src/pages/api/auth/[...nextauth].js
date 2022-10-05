import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        email: { label: "Email", type: "email" },
      },
      async authorize(credentials, req) {
        const { username, email } = credentials;

        const user = { name: username, email };

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
});
