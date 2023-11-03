import { Session } from "next-auth";
import Cookies from "universal-cookie";

const getCookieData = (session: Session | null) => {
    const cookies = new Cookies();
    let data = cookies.get("session-token");
    if (session) data = session;
    const redirectPath = cookies.get("redirectPath") || "/";
    return { data, redirectPath };
};

export default getCookieData;
