import styles from "../../styles/pages/about.module.scss";

type Props = {
    title: String;
    description: String;
    imgUrl: String;
    imgAlt?: String;
    flip?: boolean;
};

function AboutCard({ title, description, imgUrl, imgAlt, flip }: Props) {
    return (
        <div className={`${styles.card} ${flip==true ? styles.flip : ""}`}>
            <div className={styles.left}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.description}>{description}</p>
            </div>
            <div className={styles.right}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={imgUrl as string}
                    alt={imgAlt ? (imgAlt as string) : ""}
                />
            </div>
        </div>
    );
}

export default AboutCard;
