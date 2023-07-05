import Link from "next/link";
import {useState} from "react";
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
                    <img src="/vercel.svg" alt="ACM at PEC"/>
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
                            return (
                                <li onClick={toggleMenu} key={i}>
                                    <Link href={headerItem.href} className={styles.nav_link}>
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