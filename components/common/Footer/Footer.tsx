import React from "react";
import styles from "../../../styles/components/Footer.module.scss";
import Link from "next/link";
import {SocialLinks} from "../SocialLinks/SocialLinks";

function Footer({color, branch} : {color: string, branch: string}) {
    return (
        <footer className={styles.footer} style={{backgroundColor: color}}>
            <div className={styles.left}>
                <h2>About</h2>
                <ul>
                    {aboutLinks.map((aboutLink, index) => {
                        return <li key={index}>
                            <Link href={aboutLink.href} aria-label={aboutLink.name}>{aboutLink.name}</Link>
                        </li>
                    })}
                </ul>
            </div>
            <div className={styles.middle}>
                <h2>Community</h2>
                <ul>
                    {communityLinks.map((communityLink, index) => {
                        return <li key={index}>
                            <Link href={communityLink.href} aria-label={communityLink.name}>{communityLink.name}</Link>
                        </li>
                    })}
                </ul>
            </div>
            <div className={styles.right}>
                <h2>Social Media</h2>
                <SocialLinks branch={branch} />
            </div>
        </footer>
    );
}

export default Footer;

const communityLinks = [
    {
        href: "/branches/development",
        name: "Development Web/App"
    }, {
        href: "/branches/ai",
        name: "Artificial Intelligence"
    }, {
        href: "/branches/cp",
        name: "Competitive Programming"
    }, {
        href: "/branches/cyber",
        name: "Cyber Security"
    }, {
        href: "/branches/socials",
        name: "Designing and Socials"
    }, {
        href: "/branches/wit",
        name: "Women in Tech"
    },
]

const aboutLinks = [
    {
        href: "/about",
        name: "About Us"
    }, {
        href: "/team",
        name: "Core Team"
    }, {
        href: "/events",
        name: "Events"
    }, {
        href: "/developers",
        name: "Developers"
    },
]