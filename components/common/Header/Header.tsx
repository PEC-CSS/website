import Link from "next/link";
import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import styles from "../../../styles/components/Header.module.scss";
import Hamburger from "./Hamburger";
import { useRouter } from "next/router";
import Image from "next/image";
import { useSession } from "next-auth/react";
import getCookieData from "../../../lib/getCookieData";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState("/");
    const isMobile = useMediaQuery("only screen and (max-width : 900px)");
    const { data: session } = useSession();
    const { data: cookieData } = getCookieData(session);

    function toggleMenu() {
        setMenuOpen(!menuOpen);
        if (isMobile) {
            menuOpen
                ? document.body.classList.remove("body-scroll-lock")
                : document.body.classList.add("body-scroll-lock")
        }
    }

    const router = useRouter();

    useEffect(() => {
        setActive(router.pathname);

        function removeScrollLock() {
            if (window.innerWidth > 900) {
                document.body.classList.remove("body-scroll-lock")
            } else {
                if (menuOpen) document.body.classList.add("body-scroll-lock")
            }
        }

        window.addEventListener('resize', removeScrollLock)

        return () => window.removeEventListener("resize", removeScrollLock)
    }, [router.pathname, menuOpen, window.innerWidth]);

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
                    className={`${menuOpen ? styles.active : ""} ${styles.menu_modal
                        }`}
                >
                    <ul
                        className={`${styles.nav_items} ${menuOpen ? styles.active : ""
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
                                        className={`${styles.nav_link} ${isActive
                                            ? styles.active_nav_link
                                            : ""
                                            }`}
                                    >
                                        {headerItem.name}
                                    </Link>
                                </li>
                            );
                        })}
                        {cookieData == null ? (
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

function useMediaQuery(query: string) {
    const subscribe = useCallback(
        (callback: () => void) => {
            const matchMedia = window.matchMedia(query);

            matchMedia.addEventListener("change", callback);
            return () => {
                matchMedia.removeEventListener("change", callback);
            };
        },
        [query]
    );

    const getSnapshot = () => {
        return window.matchMedia(query).matches;
    };

    const getServerSnapshot = () => {
        throw Error("useMediaQuery is a client-only hook");
    };

    return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
