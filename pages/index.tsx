import PageLayout from "../components/layout/PageLayout";
import styles from "../styles/pages/index.module.scss";
import Branches from "../components/home/Branches";
import Trending from "../components/home/Trending";
import Link from "next/link";
import { socialLinks } from "../components/common/SocialLinks/SocialLinks";
import Image from "next/image";

export default function Home() {
    return (
        <PageLayout
            title="Home | ACM at PEC"
            heading={"A computer science society"}
            description="The prestigious student chapter of ACM at Punjab Engineering College, Chandigarh."
        >
            <div className={styles.hero}>
                <p>
                    Embark on a captivating journey through the digital realm of
                    the Computer Science Society, the prestigious student
                    chapter of ACM at{" "}
                    <em>Punjab Engineering College, Chandigarh.</em> Immerse
                    yourself in a world where passion for technology ignites
                    creativity, where minds come together to push boundaries,
                    and where innovation thrives. Welcome to the epitome of
                    excellence in computer science education and exploration.
                </p>
            </div>

            <div className={styles.branches}>
                <h2>Our Branches</h2>

                <Branches />

                <Link href={"/branches"} aria-label="Branches">
                    <button>Dive Deeper</button>
                </Link>
            </div>

            <div className={styles.reach_us}>
                <h3>Reach out us at</h3>
                <div className={styles.divider} />
                <div className={styles.social_icons}>
                    {socialLinks
                        .filter((socialLink) => socialLink.svg.length > 0)
                        .map((socialLink, index) => {
                            return (
                                <a key={index} href={socialLink.href}>
                                    <Image
                                        height={70}
                                        width={70}
                                        src={socialLink.svg}
                                        alt={socialLink.name}
                                    />
                                </a>
                            );
                        })}
                </div>
            </div>

            <div className={styles.trending}>
                <h2>Trending</h2>

                <Trending trendingType="home" />
            </div>
        </PageLayout>
    );
}
