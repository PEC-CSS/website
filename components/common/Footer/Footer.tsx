import React from "react";
import styles from "../../../styles/components/Footer.module.scss";
import { BsFacebook, BsGithub, BsInstagram, BsYoutube } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import Link from "next/link";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.left}>
                <h2>Find us on Social Media</h2>
                <ul>
                    <li>
                        <BsFacebook />
                    </li>
                    <li>
                        <BsInstagram />
                    </li>
                    <li>
                        <BsGithub />
                    </li>
                    <li>
                        <FaDiscord />
                    </li>
                    <li>
                        <BsYoutube />
                    </li>
                </ul>
                <button>Join our Mailing List</button>
                <p className={styles.reach_us_at}>Reach us at</p>
                <a href="mailto:pecacm@pec.edu.in">pecacm@pec.edu.in</a>
            </div>
            <div className={styles.middle}>
                <h2>About ACM at PEC</h2>
                {/* links */}
                <ul>
                    <li>
                        <Link href={"/about"}>About</Link>
                    </li>
                    <li>
                        <Link href={"/events"}>Events</Link>
                    </li>
                    <li>
                        <Link href={"/dev"}>Dev Team</Link>
                    </li>
                    <li>
                        <Link href={"/sponsors"}>Sponsors</Link>
                    </li>
                </ul>
            </div>
            <div className={styles.right}>
                <h2>Committees</h2>
                <ul>
                    <li>
                        <Link href={"/"}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/vercel_white.svg" alt="ACM at PEC" />
                        </Link>
                    </li>
                    <li>
                        <Link href={"/"}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/vercel_white.svg" alt="ACM at PEC" />
                        </Link>
                    </li>
                    <li>
                        <Link href={"/"}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/vercel_white.svg" alt="ACM at PEC" />
                        </Link>
                    </li>
                    <li>
                        <Link href={"/"}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/vercel_white.svg" alt="ACM at PEC" />
                        </Link>
                    </li>
                    <li>
                        <Link href={"/"}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/vercel_white.svg" alt="ACM at PEC" />
                        </Link>
                    </li>
                    <li>
                        <Link href={"/"}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/vercel_white.svg" alt="ACM at PEC" />
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
