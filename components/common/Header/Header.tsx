import Link from "next/link";
import {useEffect, useState} from "react";
import styles from "../../../styles/components/Header.module.scss";
import Hamburger from "./Hamburger";
import {useRouter} from "next/router";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState("/");

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    const router = useRouter();

    useEffect(() => {
        setActive(router.pathname);
    }, [router.pathname])

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo_wrapper}>
                <Link href={"/"}>
                    <>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/assets/logos/acmSVG.svg" alt="ACM at PEC"/>
                        <span>pecacm</span>
                    </>
                </Link>
            </div>
            <div className={styles.list_items_wrapper}>
                <Hamburger menuOpen={menuOpen} toggleMenu={toggleMenu}/>
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
                                    <Link href={headerItem.href}
                                          className={`${styles.nav_link} ${isActive ? styles.active_nav_link : ""}`}>
                                        {headerItem.name}
                                    </Link>
                                </li>
                            )
                        })}
                        <li>
                            <Link href={"/login"}>
                                <button>Login</button>
                            </Link>
                        </li>
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
    }, {
        href: "/branches",
        name: "Branches",
    }, {
        href: "/team",
        name: "Team"
    }, {
        href: "/events",
        name: "Events"
    }
]