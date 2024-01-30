import { jsx } from "@emotion/react";
import JSX = jsx.JSX;
import Link from "next/link";
import styles from "../../styles/components/SidebarItem.module.scss";
import { useRouter } from "next/router";
import logout from "../../lib/logout";
import { useState } from "react";
import { useSession } from "next-auth/react";
import DialogPopup from "../common/DialogPopup/DialogPopup";

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

    const [showLogoutDialog, setShowLogoutDialog] = useState(false);

    if (item.logout) {
        return showLogoutDialog ? (
            <DialogPopup
                errorDescription="Are you sure you want to logout?"
                errorTitle="Logout"
                handleAction={() => {
                    logout(router, session);
                }}
                handleClose={() => setShowLogoutDialog(false)}
            />
        ) : (
            <button
                className={styles.sidebarItem}
                aria-label={item.title}
                onClick={() => setShowLogoutDialog(true)}
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
