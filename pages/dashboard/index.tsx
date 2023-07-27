import DashboardLayout from "../../components/layout/DashboardLayout";
import styles from "../../styles/pages/DashboardHome.module.scss"
import Trending from "../../components/home/Trending";
import {LeaderboardItem} from "../../components/dashboard/LeaderboardItem";
import NextEventCard from "../../components/common/NextEventCard/NextEventCard";

function DashboardHome() {
    // dummy user
    const user = {
        name: "Ken",
        designation: "Member",
        email: "msinghoberoi993@gmail.com"
    }

    // dummy leaderboard
    const leaderboard = [
        {
            name: "Ken",
            designation: "Member",
            dp: "https://avatars.githubusercontent.com/u/78747188?v=4",
            xp: 10
        },
        {
            name: "Ken",
            designation: "Member",
            dp: "https://avatars.githubusercontent.com/u/78747188?v=4",
            xp: 9
        },
        {
            name: "Ken",
            designation: "Member",
            dp: "https://avatars.githubusercontent.com/u/78747188?v=4",
            xp: 3
        },
        {
            name: "Ken",
            designation: "Member",
            dp: "https://avatars.githubusercontent.com/u/78747188?v=4",
            xp: 2
        },
        {
            name: "Ken",
            designation: "Member",
            dp: "https://avatars.githubusercontent.com/u/78747188?v=4",
            xp: 1
        }
    ]


    return (
        <DashboardLayout title="Dashboard | ACM at PEC" heading={(
            <div className={styles.title}>
                Hey {user.name},
            </div>
        )}>
            <div className={styles.trending}>
                <h2 className={styles.header}>What&#39;s going on?</h2>
                <Trending trendingType="home"/>
            </div>
            <div className={styles.details}>
                <div className={styles.contributors}>
                    <h2 className={styles.header}>Top contributors</h2>
                    <div className={styles.leaderboard}>
                        {
                            leaderboard.map((user, index) => {
                                return <LeaderboardItem user={user} key={index} />
                            })
                        }
                    </div>
                </div>
                <div className={styles.space}></div>
                <NextEventCard />
            </div>
        </DashboardLayout>
    )
}

export default DashboardHome;