import React from "react";
import PageLayout from "../components/layout/PageLayout";
import styles from "../styles/pages/team.module.scss";
import { DEVELOPERS } from "../constants/team";
import Image from "next/image";

function dev() {
    return (
        <PageLayout
            title="Developer Team | ACM at PEC"
            description="People behind this wonderful work of art website."
            heading={"People behind this website"}
        >
            <div className={styles.core}>
                <div className={styles.cards}>
                    {DEVELOPERS.map((head, i) => {
                        const image =
                            head.image.length != 0
                                ? head.image
                                : "/assets/logos/acm.png";
                        return (
                            <div className={styles.card} key={i}>
                                <Image
                                    height={70}
                                    width={70}
                                    src={image}
                                    alt={head.name}
                                />
                                <div className={styles.data}>
                                    <p className={styles.name}>{head.name}</p>
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
