import Link from "next/link";
import { useState } from "react";
import styles from "../../../styles/components/Header.module.scss";
import Hamburger from "./Hamburger";

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
