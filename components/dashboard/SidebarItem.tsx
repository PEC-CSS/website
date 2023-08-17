import { jsx } from "@emotion/react";
import JSX = jsx.JSX;
import Link from "next/link";
import styles from "../../styles/components/SidebarItem.module.scss";
import { useRouter } from "next/router";
import { Common } from "../../constants/common";
import { useLocalStorage } from "usehooks-ts";

type Item = {
    title: string;
    icon: JSX.Element;
    path: string;
    logout?: boolean;
};

export const SidebarItem = (item: Item) => {
    const router = useRouter();
    const [_, setAuthorization] = useLocalStorage<string | null>(
        Common.AUTHORIZATION,
        null
    );

    const selected = router.pathname === item.path ? "true" : "false";

    const logout = () => {
        setAuthorization(null);
        router.push("/");
    };

    if (item.logout) {
        return (
            <button
                className={styles.sidebarItem}
                aria-label={item.title}
                onClick={logout}
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
