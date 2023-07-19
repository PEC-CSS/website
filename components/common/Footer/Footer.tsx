import React from "react";
import styles from "../../../styles/components/Footer.module.scss";
import Link from "next/link";
import {SocialLinks} from "../SocialLinks/SocialLinks";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.left}>
                <h2>About</h2>
                <ul>
                    {aboutLinks.map((aboutLink, index) => {
                        return <li key={index}>
                            <Link href={aboutLink.href}>{aboutLink.name}</Link>
                        </li>
                    })}
                </ul>
            </div>
            <div className={styles.middle}>
                <h2>Community</h2>
                <ul>
                    {communityLinks.map((communityLink, index) => {
                        return <li key={index}>
                            <Link href={communityLink.href}>{communityLink.name}</Link>
                        </li>
                    })}
                </ul>
            </div>
            <div className={styles.right}>
                <h2>Social Media</h2>
                <SocialLinks />
            </div>
        </footer>
    );
}

export default Footer;

const communityLinks = [
    {
        href: "/dev",
        name: "Development Web/App"
    }, {
        href: "/ml",
        name: "Machine Learning"
    }, {
        href: "/cp",
        name: "Competitive Programming"
    }, {
        href: "/cyber",
        name: "Cyber Security"
    }, {
        href: "/os",
        name: "Open Source"
    }, {
        href: "/design",
        name: "Designing and Socials"
    },
]

const aboutLinks = [
    {
        href: "/about",
        name: "About Us"
    }, {
        href: "/core",
        name: "Core Team"
    }, {
        href: "/events",
        name: "Events"
    }, {
        href: "/developers",
        name: "Developers"
    },
]