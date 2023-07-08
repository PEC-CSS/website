import React from "react";
import AboutCard from "../components/about/AboutCard";
import {ABOUTUS} from "../constants/aboutUsText";
import PageLayout from "../components/layout/PageLayout";
import styles from "../styles/pages/about.module.scss";

function about() {
    return (
        <PageLayout title="About | ACM at PEC">
            <div className={styles.about}>
                {
                    ABOUTUS.map((obj, id) =>
                        <AboutCard
                            title={obj.title}
                            descriptions={obj.descriptions}
                            imgUrl={obj?.imgUrl}
                            imgAlt={obj.imgAlt}
                            key={obj.key}
                            flip={id%2===1}
                        />
                    )
                }
            </div>
        </PageLayout>
    );
}

export default about;
