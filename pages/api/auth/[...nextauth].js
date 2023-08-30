import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { firebaseAdmin } from "../../../serverless/firebaseAdmin";
import { async } from "@firebase/util";

export default NextAuth({
    providers: [
        CredentialsProvider({
            credentials: {},
            authorize: async ({ idToken }, _req) => {
                if (idToken) {
                    try {
                        const decoded = await firebaseAdmin
                            .auth()
                            .verifyIdToken(idToken);
                        return { ...decoded };
                    } catch (err) {
                        console.error(err);
                    }
                }
                return null;
            },
        }),
    ],

    secret: process.env.SECRET,

    session: {},

    jwt: {
        secret: process.env.SECRET,
    },

    pages: {
        signIn: "/login",
        // signOut: '/auth/signout', // Displays form with sign out button
        // error: '/auth/error', // Error code passed in query string as ?error=
        // verifyRequest: '/auth/verify-request', // Used for check email page
        newUser: "/login" // If set, new users will be directed here on first sign in
    },

    callbacks: {
        jwt: async ({ token, user }) => {
            if (user) {
                token = user;
            }
            return token;
        },
    },

    events: {},

    debug: process.env.NODE_ENV !== "production",
});
