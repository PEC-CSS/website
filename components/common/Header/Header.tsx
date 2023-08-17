import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../../../styles/components/Header.module.scss";
import Hamburger from "./Hamburger";
import { useRouter } from "next/router";
import Image from "next/image";
import { useReadLocalStorage } from "usehooks-ts";
import { Common } from "../../../constants/common";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState("/");

    const authorization = useReadLocalStorage<string | null>(
        Common.AUTHORIZATION
    );

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    const router = useRouter();

    useEffect(() => {
        setActive(router.pathname);
    }, [router.pathname]);

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo_wrapper}>
                <Link href={"/"} aria-label="PEC ACM">
                    <>
                        <Image
                            height={60}
                            width={60}
                            src={"/assets/logos/acm.png"}
                            alt="ACM at PEC"
                        />
                        <span>pecacm</span>
                    </>
                </Link>
            </div>
            <div className={styles.list_items_wrapper}>
                <Hamburger menuOpen={menuOpen} toggleMenu={toggleMenu} />
                <div
                    className={`${menuOpen ? styles.active : ""} ${
                        styles.menu_modal
                    }`}
                >
                    <ul
                        className={`${styles.nav_items} ${
                            menuOpen ? styles.active : ""
                        }`}
                        role="presentation"
                    >
                        {headerItems.map((headerItem, i) => {
                            const isActive = active === headerItem.href;
                            return (
                                <li onClick={toggleMenu} key={i}>
                                    <Link
                                        href={headerItem.href}
                                        aria-label={headerItem.name}
                                        className={`${styles.nav_link} ${
                                            isActive
                                                ? styles.active_nav_link
                                                : ""
                                        }`}
                                    >
                                        {headerItem.name}
                                    </Link>
                                </li>
                            );
                        })}
                        {authorization == null ? (
                            <li>
                                <Link href={"/login"} aria-label="Login">
                                    <button>Login</button>
                                </Link>
                            </li>
                        ) : (
                            <li>
                                <Link
                                    href={"/dashboard"}
                                    aria-label="Dashboard"
                                >
                                    <button>Dashboard</button>
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;

const headerItems = [
    {
        href: "/about",
        name: "About",
    },
    {
        href: "/branches",
        name: "Branches",
    },
    {
        href: "/team",
        name: "Team",
    },
    {
        href: "/events",
        name: "Events",
    },
];
