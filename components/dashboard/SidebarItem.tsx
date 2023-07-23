import {jsx} from "@emotion/react";
import JSX = jsx.JSX;
import Link from "next/link";
import styles from "../../styles/components/SidebarItem.module.scss"
import {useRouter} from "next/router";

type Item = {
    title: string,
    icon: JSX.Element,
    path: string
}

export const SidebarItem = (item: Item) => {

    const router = useRouter()

    const selected = (router.pathname === item.path) ? "true": "false"
    return (
        <Link href={item.path} className={styles.sidebarItem} data-selected={selected} aria-label={item.title}>
            {item.icon}
            <h3>{item.title}</h3>
        </Link>
    )
}