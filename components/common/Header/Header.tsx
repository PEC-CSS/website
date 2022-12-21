import Link from "next/link";
import { useState } from "react";
import styles from "../../../styles/components/Header.module.scss";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo_wrapper}>
                <Link href={"/"}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/vercel.svg" alt="ACM at PEC" />
                </Link>
            </div>
            <div className={styles.list_items_wrapper}>
                {/* hamburger icon */}
                <div className={styles.hamburger_wrapper}>
                    <svg
                        className={`${styles.ham} ${
                            menuOpen ? styles.active : ""
                        }`}
                        viewBox="0 0 100 100"
                        width="80"
                        onClick={toggleMenu}
                    >
                        <path
                            className={`${styles.line} ${styles.top}`}
                            d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
                        />
                        <path
                            className={`${styles.line} ${styles.middle}`}
                            d="m 70,50 h -40"
                        />
                        <path
                            className={`${styles.line} ${styles.bottom}`}
                            d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
                        />
                    </svg>
                </div>
                {/* hamburger end */}
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
                        <li onClick={toggleMenu}>
                            <Link href={"/about"} className={styles.nav_link}>
                                about
                            </Link>
                        </li>
                        <li onClick={toggleMenu}>
                            <Link
                                href={"/committees"}
                                className={styles.nav_link}
                            >
                                committies
                            </Link>
                        </li>
                        <li onClick={toggleMenu}>
                            <Link href={"/events"} className={styles.nav_link}>
                                events
                            </Link>
                        </li>
                        <li>
                            <button>Member Login</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
