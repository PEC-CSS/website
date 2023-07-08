import React from "react";
import AboutCard from "../components/about/AboutCard";
import { aboutUsText } from "../constants/aboutUsText";
import PageLayout from "../components/layout/PageLayout";
import styles from "../styles/pages/about.module.scss";

function about() {
    return (
        <PageLayout title="About | ACM at PEC">
            <div className={styles.banner} />
            <div className={styles.about}>
                {
                    aboutUsText.map((obj, id) =>
                        <AboutCard
                            title={obj.title}
                            descriptions={obj.descriptions}
                            imgUrl={obj?.imgUrl}
                            imgAlt={obj.imgAlt}
                            key={obj.key}
                            flip={id % 2 === 1} />
                    )
                }
            </div>
        </PageLayout>
    );
}

export default about;
