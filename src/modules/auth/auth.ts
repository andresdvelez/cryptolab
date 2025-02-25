import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    // AppleProvider({
    //   clientId: process.env.APPLE_ID!,
    //   clientSecret: process.env.APPLE_SECRET!,
    // }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_CLIENT_ID!,
    //   clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    // }),
    Credentials({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      //   authorize: async (credentials) => {
      //     try {
      //       //   const { email, password } = await signInSchema.parseAsync(
      //       //     credentials
      //       //   );
      //       // Fetch the user by email
      //       //   const existingUser = await client
      //       //     .withConfig({ useCdn: false })
      //       //     .fetch(AUTHOR_BY_EMAIL_QUERY, { email });
      //       //   if (!existingUser) {
      //       //     throw new Error("User not found");
      //       //   }
      //       //   const isPasswordValid = await comparePass(
      //       //     password,
      //       //     existingUser.hashPassword
      //       //   );
      //       //   if (!isPasswordValid) {
      //       //     throw new Error("Incorrect password");
      //       //   }
      //       //   useAuthStore.setState({ user: existingUser });
      //       //   return existingUser;
      //       return { email: "", id: "" };
      //     } catch (error) {
      //       console.error("Login error:", error);

      //       throw error;
      //     }
      //   },
    }),
  ],
  //   callbacks: {
  //     async signIn({ user, account, profile }) {
  //       if (account?.provider !== "google") {
  //         return true;
  //       }

  //       const googleId = profile?.sub;
  //       if (!googleId) {
  //         return false;
  //       }

  //       return true;
  //     },

  //     async jwt({ token, account, profile }) {
  //       if (account && profile) {
  //         token.sub = profile.sub as string | undefined;
  //         token.googleId = profile.sub;
  //       }

  //       return token;
  //     },

  //     async session({ session, token }) {
  //       return {
  //         ...session,
  //         id: token.googleId,
  //         role: token.role,
  //       };
  //     },
  //   },
});
