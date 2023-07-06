import PageLayout from "../components/layout/PageLayout";
import styles from "../styles/pages/index.module.scss";
import Branches from "../components/home/Branches";
import Trending from "../components/home/Trending";
import Link from "next/link";

export default function Home() {
    return <PageLayout title="Home | ACM at PEC">
        <div className={styles.hero}>
            <p>
                Embark on a captivating journey through the digital realm of the Computer Science Society, the
                prestigious
                student chapter of ACM at <em>Punjab Engineering College, Chandigarh.</em> Immerse yourself in a world
                where
                passion
                for technology ignites creativity, where minds come together to push boundaries, and where innovation
                thrives. Welcome to the epitome of excellence in computer science education and exploration.
            </p>

        </div>

        <div className={styles.branches}>
            <h2>
                Our Branches
            </h2>

            <Branches/>

            <Link href={"/branches"}>
                <button>Learn More</button>
            </Link>
        </div>

        <div className={styles.reach_us}>
            <h3>Reach out us at</h3>
            <div className={styles.divider}/>
            <div className={styles.social_icons}>
                {socialLinks.map((socialLink, index) => {
                    return <a key={index} href={socialLink.href}>
                        <img src={socialLink.image} alt={socialLink.name}/>
                    </a>
                })}
            </div>
        </div>

        <div className={styles.trending}>
            <h2>
                Trending
            </h2>

            <Trending/>
        </div>
    </PageLayout>;
}

const socialLinks = [
    {
        href: "",
        image: "/assets/illustrations/socials/discord.svg",
        name: "Discord"
    }, {
        href: "",
        image: "/assets/illustrations/socials/instagram.svg",
        name: "Instagram"
    }, {
        href: "",
        image: "/assets/illustrations/socials/linkedin.svg",
        name: "Linkedin"
    }, {
        href: "",
        image: "/assets/illustrations/socials/youtube.svg",
        name: "YouTube"
    }, {
        href: "",
        image: "/assets/illustrations/socials/facebook.svg",
        name: "Facebook"
    },
]