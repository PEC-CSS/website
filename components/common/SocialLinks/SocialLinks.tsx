import Link from "next/link";
import React from "react";
import {BsFacebook, BsGithub, BsInstagram, BsYoutube} from "react-icons/bs";
import {FaDiscord, FaLinkedinIn} from "react-icons/fa";
import styles from "../../../styles/components/SocialLinks.module.scss"

export const SocialLinks = ({branch} : {branch?: string}) => {
    return (
        <ul className={styles.socialLinks}>
            {socialLinks.map((socialLink, index) => {
                return <li key={index} value={branch ? branch : "none"}>
                    <Link href={socialLink.href} aria-label={socialLink.name}>
                        {socialLink.icon}
                    </Link>
                </li>
            })}
        </ul>
    )
}

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