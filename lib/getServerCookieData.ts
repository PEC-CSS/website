import { GetServerSidePropsContext } from "next";
import Cookies from "universal-cookie";

const getServerCookieData = (context: GetServerSidePropsContext) => {
    const cookies = new Cookies(context.req.headers.cookie);
    const data =
        cookies.get("next-auth.session-token") ||
        cookies.get("session-token") ||
        cookies.get("__Secure-next-auth.session-token");
    console.log(data);
    const redirectPath = cookies.get("redirectPath") || "/";
    return { data, redirectPath };
};

export default getServerCookieData;
