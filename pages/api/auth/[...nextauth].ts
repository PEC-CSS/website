import NextAuth from "next-auth/next";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { cert } from "firebase-admin/app";
import type { Adapter } from "next-auth/adapters";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { firebaseAdmin } from "../../../serverless/firebaseAdmin";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../serverless/firebase";

const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: "acm",
            name: "ACM ID",
            credentials: {},
            
            async authorize(credentials: any, req) {
                // if (credentials?.idToken) {
                //     try {
                //         const decoded = await firebaseAdmin
                //             .auth()
                //             .verifyIdToken(credentials.idToken);
                //         return {
                //             id: decoded.uid,
                //             name: decoded.sub,
                //             email: decoded.email,
                //             image: decoded.picture,
                //         };
                //     } catch (err) {
                //         console.error(err);
                //     }
                //     return null;
                // }
                // return null;
                const userCrednetial = await signInWithEmailAndPassword(
                    auth,
                    credentials?.email,
                    credentials?.password
                );
                // return userCrednetial.user;
                return {
                    id: userCrednetial.user.uid,
                    name: userCrednetial.user.displayName,
                    email: userCrednetial.user.email,
                    image: userCrednetial.user.photoURL
                }
            },
        }),
    ],
    adapter: FirestoreAdapter({
        credential: cert({
            projectId: process.env.FIREBASE_PROJECT_ID,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            privateKey: process.env.FIREBASE_PRIVATE_KEY,
        }),
    }) as Adapter,
    pages: {
        signIn: "/login",
    },
    secret: process.env.SECRET,
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 Days
    },
    // callbacks: {
    //     jwt: async ({ token, user }) => {
    //         if (user) {
    //             token.email = user.email;
    //             token.name = user.name;
    //             token.picture = user.image;
    //         }
    //         return token;
    //     },
    // },
};
export default NextAuth(authOptions);
