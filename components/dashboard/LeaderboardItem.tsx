import Image from "next/image";
import styles from "../../styles/components/LeaderboardItem.module.scss";
import { Avatar } from "@mui/material";
import { Common } from "../../constants/common";

// defining user here for now
type User = {
    name: string;
    designation: string;
    dp: string;
    xp: number;
};

export const LeaderboardItem = ({ user }: { user: User }) => {
    return (
        <div className={styles.item}>
            <Avatar
                sx={{
                    height: 60,
                    width: 60,
                    fontSize: 22,
                    fontFamily: "Josefin Sans",
                    bgcolor: Common.primaryColor,
                    color: "white",
                }}
                src={user.dp}
            >
                {user.name[0]}
            </Avatar>
            <div className={styles.details}>
                <h2>{user.name}</h2>
                <div>{user.designation}</div>
            </div>
            <div className={styles.xp}>{user.xp}xp</div>
        </div>
    );
};
