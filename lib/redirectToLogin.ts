import { NextRouter } from "next/router";
import Cookies from "universal-cookie";

const redirectToLogin = (router: NextRouter, path = "/login") => {
    const cookies = new Cookies();
    const currentPath = router.asPath;
    cookies.set("redirectPath", currentPath);
    router.push(path);
};

export default redirectToLogin;
