import PageLayout from "../components/layout/PageLayout";
import { CORE, HEADS } from "../constants/team";
import styles from "../styles/pages/team.module.scss";

export default function Team() {
    return (
        <PageLayout title={"Team | ACM at PEC"} heading="Leadership">
            <p className={styles.title}>
                Our heads support the entire ACM community while our committee
                presidents foster the growth of their committee.
            </p>
            <div className={styles.heads}>
                {/* <h3>Heads</h3> */}
                <div className={styles.cards}>
                    {HEADS.map((head, i) => {
                        return (
                            <div className={styles.card} key={i}>
                                <img src={head.image} alt={head.name} />
                                <p className={styles.name}>{head.name}</p>
                                <p>{head.post}</p>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className={styles.core}>
                {/* <h3>Core-Team</h3> */}
                <div className={styles.cards}>
                    {CORE.map((head, i) => {
                        const image = head.image.length !=0 ? head.image : "/assets/logos/acm.png"
                        return (
                            <div className={styles.card} key={i}>
                                <img src={image} alt={head.name} />
                                <div className={styles.data}>
                                    <p className={styles.name}>{head.name}</p>
                                    <p className={styles.post}>{head.post}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </PageLayout>
    );
}
