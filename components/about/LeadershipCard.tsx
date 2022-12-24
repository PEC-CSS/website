import styles from "../../styles/pages/about.module.scss";

type Props = {
    name: string;
    post: string;
    imgUrl: string;
};

function LeadershipCard({ name, post, imgUrl }: Props) {
    return (
        <div className={styles.leadershipCard}>
            <div className={styles.left}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={imgUrl} alt="" />
            </div>
            <div className={styles.right}>
                <p className={styles.name}>{name}</p>
                <p className={styles.post}>{post}</p>
            </div>
        </div>
    );
}

export default LeadershipCard;
