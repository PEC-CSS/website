import Cookies from "universal-cookie";
import { signOut } from "next-auth/react";
import { NextRouter } from "next/router";
import { Session } from "next-auth";

const logout = async (router: NextRouter, session: Session | null) => {
    try {
        const cookies = new Cookies();
        const redirectPath = router.asPath;

        let data;
        if (session) {
            data = session;
            signOut();
        } else {
            data = cookies.get("session-token");
        }
        cookies.remove("redirectPath");
        cookies.remove("session-token");

        router.push(redirectPath);
        return {
            success: true,
        };
    } catch (ex) {
        return {
            success: false,
        };
    }
};

export default logout;
