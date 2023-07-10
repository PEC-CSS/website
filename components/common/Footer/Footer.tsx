import React from "react";
import styles from "../../../styles/components/Footer.module.scss";
import {BsFacebook, BsGithub, BsInstagram, BsYoutube} from "react-icons/bs";
import {FaDiscord, FaLinkedinIn} from "react-icons/fa";
import Link from "next/link";

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
                <ul>
                    {socialLinks.map((socialLink, index) => {
                        return <li key={index}>
                            <Link href={socialLink.href}>
                                {socialLink.icon}
                            </Link>
                        </li>
                    })}
                </ul>
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

export const socialLinks = [
    {
        href: "https://discord.gg/59mDGtSyGD",
        icon: <FaDiscord/>,
        name: "Discord",
        svg: "/assets/illustrations/socials/discord.svg"
    }, {
        href: "https://github.com/PEC-CSS/",
        icon: <BsGithub/>,
        name: "Github",
        svg: ""
    }, {
        href: "https://www.instagram.com/pecacm",
        icon: <BsInstagram/>,
        name: "Instagram",
        svg: "/assets/illustrations/socials/instagram.svg"
    }, {
        href: "https://www.youtube.com/c/PECACMStudentChapter",
        icon: <BsYoutube/>,
        name: "Youtube",
        svg: "/assets/illustrations/socials/youtube.svg"
    }, {
        href: "https://www.linkedin.com/company/pec-acm-student-chapter",
        icon: <FaLinkedinIn/>,
        name: "Linkedin",
        svg: "/assets/illustrations/socials/linkedin.svg"
    }, {
        href: "https://www.facebook.com/pecacm/",
        icon: <BsFacebook/>,
        name: "Facebook",
        svg: "/assets/illustrations/socials/facebook.svg"
    },
]