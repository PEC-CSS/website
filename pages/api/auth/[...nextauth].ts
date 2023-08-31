import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;
export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            type: "credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const credentialDetails = {
                    email: credentials?.email,
                    password: credentials?.password,
                };

                const resp = await fetch(backendURL + "/v1/user/login", {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(credentialDetails),
                });

                if (resp.status !== 200) {
                    return null;
                }

                const user = await resp.json();
                return {
                    email: user.user.email,
                    sid: user.user.sid,
                    name: user.user.name,
                    image: user.user.dp,
                } as any;
            },
        }),
    ],
    pages: {
        signIn: "/login",
    },
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    callbacks: {
        jwt: async ({ token, user }: any) => {
            if (user) {
                token.email = user.email;
            }

            return token;
        },
        session: ({ session, token, user }) => {
            if (token) {
                session.user!.email = token.email;
                session.user!.name = token.name;
                session.user!.image = token.picture;
            }
            return session;
        },
    },
};

export default NextAuth(authOptions);
