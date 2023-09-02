import React from "react";
import PageLayout from "../components/layout/PageLayout";
import { DEVELOPERS } from "../constants/team";
import Image from "next/image";
import styles from "../styles/pages/developers.module.scss";

function dev() {
    return (
        <PageLayout
            title="Developer Team | ACM at PEC"
            description="People behind this wonderful work of art website."
            heading={"Our Dev team"}
        >
            <div className={styles.heads}>
                <h3>Awesome hands behind this work of art</h3>
                <div className={styles.cards}>
                    {DEVELOPERS.map((head, i) => {
                        return (
                            <div className={`${styles.card}`} key={i}>
                                <Image
                                    height={200}
                                    width={200}
                                    src={head.image}
                                    alt={head.name}
                                />
                                <div className={styles.details}>
                                    <p className={styles.name}>{head.name}</p>
                                    <p>{head.post}</p>
                                    <div key={i} className={styles.tech}>
                                        {head.tech.map((t, i) => {
                                            return (
                                                <Image
                                                    width={30}
                                                    height={30}
                                                    src={t}
                                                    alt={t}
                                                    key={i}
                                                />
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </PageLayout>
    );
}

export default dev;
