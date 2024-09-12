import { authOptions } from "@/utils/authOptions";
import NextAuth from "next-auth/next";
import KeycloakProvider from "next-auth/providers/keycloak";

// export const authOptions = {
//   providers: [
//     // GoogleProvider({
//     //   clientId: process.env.GOOGLE_CLIENT_ID,
//     //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     //   authorization: {
//     //     params: {
//     //       prompt: "consent",
//     //       access_type: "offline",
//     //       response_type: "code",
//     //     },
//     //   },
//     // }),
//     KeycloakProvider({
//       clientId: process.env.KEYCLOAK_CLIENT_ID,
//       clientSecret: process.env.KEYCLOAK_SECRET,
//       issuer: process.env.KEYCLOAK_ISSUER,
//     }),
//   ],
//   //   callbacks: {
//   //     // Invoked on successful sign in
//   //     async signIn({ profile }) {
//   //       // 1. Connect to database
//   //       // 2. Check if user exists
//   //       // 3. If not, then add user to database
//   //       // 4. Return true to allow sign in
//   //       return true;
//   //     },
//   //     // Modifies the session object
//   //     async session({ session }) {
//   //       // 1. Get the user from the database
//   //       // 2. Assign the userid to the session
//   //       // 3. Return session
//   //       //   return session;
//   //     },
//   //     // Invoked on sign in
//   //     // async jwt({token}) {
//   //     //     // 1. Get the user from the database
//   //     //     // 2. Add the user to the token object
//   //     //     return token
//   //     // }
//   //   },
// };

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
