import styles from "../../styles/components/LeaderboardItem.module.scss"

// defining user here for now
type User = {
    name: string,
    designation: string,
    dp: string,
    xp: number
}

export const LeaderboardItem = ({user}: {user: User}) => {
    return (
        <div className={styles.item}>
            <img src={user.dp} alt={""} />
            <div className={styles.details}>
                <h2>{user.name}</h2>
                <div>{user.designation}</div>
            </div>
            <div className={styles.xp}>{user.xp}xp</div>
        </div>
    )
}