import NextAuth, { AuthOptions, Session } from "next-auth";
import Cookies from "universal-cookie";
import GoogleProvider from "next-auth/providers/google";
import { NextApiRequest, NextApiResponse } from "next";

const authOptions = (req: NextApiRequest, res: NextApiResponse) => {
    const cookies = new Cookies(req.headers.cookie);

    return {
        providers: [
            GoogleProvider({
                clientId: process.env.GOOGLE_CLIENT_ID || "",
                clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
            }),
        ],
        callbacks: {
            async session({ session }: { session: Session }) {
                return session;
            },

            async redirect({ baseUrl }: { baseUrl: string }) {
                const redirectPath = cookies.get("redirectPath") || "/";
                return baseUrl + redirectPath;
            },
        },
        secret: process.env.NEXTAUTH_SECRET,
    };
};

const nextAuth = (req: NextApiRequest, res: NextApiResponse) =>
    NextAuth(req, res, authOptions(req, res));

export default nextAuth;