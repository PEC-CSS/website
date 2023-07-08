import styles from "../../styles/pages/about.module.scss";

type Props = {
    title: String;
    descriptions: String[];
    imgUrl: String;
    imgAlt?: String;
    flip?: boolean;
};

function AboutCard({ title, descriptions, imgUrl, imgAlt, flip = false }: Props) {
    return (
        <div className={`${styles.card} ${flip ? styles.flip : ''}`}>
            <div className={styles.content}>
                <h1>{title}</h1>
                {
                    descriptions.map((description, id) =>
                        <div key={id} className={`${styles.text} ${flip ? styles.flip : ''}`}>
                            {description}
                        </div>)
                }
            </div>

            <div className={styles.image}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={imgUrl as string}
                    alt={imgAlt ? (imgAlt as string) : ""}
                    width={270}
                    height={210}
                />
            </div>
        </div>
    );
}

export default AboutCard;
