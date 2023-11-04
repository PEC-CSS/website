import { jsx } from "@emotion/react";
import JSX = jsx.JSX;
import Link from "next/link";
import styles from "../../styles/components/SidebarItem.module.scss";
import { useRouter } from "next/router";
import { Common } from "../../constants/common";
import { useLocalStorage } from "usehooks-ts";
import logout from "../../lib/logout";
import { useSession } from "next-auth/react";

type Item = {
    title: string;
    icon: JSX.Element;
    path: string;
    logout?: boolean;
};

export const SidebarItem = (item: Item) => {
    const router = useRouter();
    const { data: session } = useSession();

    const selected = router.pathname === item.path ? "true" : "false";

    // const logout = () => {
    //     setAuthorization(null);
    //     destroyCookie(null, Common.AUTHORIZATION, {
    //         path: "/",
    //         sameSite: "strict",
    //         maxAge: 0,
    //     });
    //     router.push("/login");
    //     router.push("/");
    // };

    if (item.logout) {
        return (
            <button
                className={styles.sidebarItem}
                aria-label={item.title}
                onClick={() => logout(router, session)}
            >
                {item.icon}
                <h3>{item.title}</h3>
            </button>
        );
    }
    return (
        <Link
            href={item.path}
            className={styles.sidebarItem}
            data-selected={selected}
            aria-label={item.title}
        >
            {item.icon}
            <h3>{item.title}</h3>
        </Link>
    );
};
