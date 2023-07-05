import PageLayout from "../components/layout/PageLayout";
import styles from "../styles/pages/index.module.scss";

export default function Home() {
    return <PageLayout title="Home | ACM at PEC">
        <div className={styles.hero}>
            <p>
                Embark on a captivating journey through the digital realm of the Computer Science Society, the
                prestigious
                student chapter of ACM at Punjab Engineering College, Chandigarh. Immerse yourself in a world where
                passion
                for technology ignites creativity, where minds come together to push boundaries, and where innovation
                thrives. Welcome to the epitome of excellence in computer science education and exploration.
            </p>

            <p>
                Within our vibrant virtual domain, discover a dynamic hub pulsating with the energy of young minds
                driven by
                curiosity and a thirst for knowledge. Engage with a diverse community of tech enthusiasts, where ideas
                are
                nurtured, skills are honed, and lifelong friendships are forged. Join us as we unravel the mysteries of
                coding, unlock the potential of emerging technologies, and shape the future of computer science
                together.
            </p>
        </div>

        <div className={styles.branches}></div>

        <div className={styles.reach_us}></div>

        <div className={styles.trending}></div>
    </PageLayout>;
}
