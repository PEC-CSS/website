import Cookies from "universal-cookie";
import { signOut } from "next-auth/react";
import { NextRouter } from "next/router";
import { Session } from "next-auth";
import { Common } from "../constants/common";

const logout = async (router: NextRouter, session: Session | null) => {
    try {
        const cookies = new Cookies();

        let data;
        if (session) {
            data = session;
            await signOut();
        } else {
            data = cookies.get("session-token");
        }
        cookies.remove("redirectPath");
        cookies.remove("session-token");
        localStorage.removeItem(Common.AUTHORIZATION);

        router.push('/');
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
