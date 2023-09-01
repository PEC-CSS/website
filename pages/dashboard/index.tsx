import DashboardLayout from "../../components/layout/DashboardLayout";
import styles from "../../styles/pages/DashboardHome.module.scss";
import Trending from "../../components/home/Trending";
import { LeaderboardItem } from "../../components/dashboard/LeaderboardItem";
import NextEventCard from "../../components/common/NextEventCard/NextEventCard";
import { parseCookies } from "nookies";
import { GetServerSidePropsContext } from "next";
import { Common } from "../../constants/common";

function DashboardHome({username, photo}: any) {
    // dummy leaderboard
    const leaderboard = [
        {
            name: "Harshpreet Singh Johar",
            designation: "Chairperson",
            dp: "https://avatars.githubusercontent.com/u/50266759?v=4",
            xp: 69,
        },
        {
            name: "Ishwarendra Jha",
            designation: "Tresurer",
            dp: "",
            xp: 49,
        },
        {
            name: "Akash Rout",
            designation: "EB Memeber",
            dp: "",
            xp: 20,
        },
        {
            name: "Priyanka Soni",
            designation: "EB Member",
            dp: "",
            xp: 18,
        },
        {
            name: "Pranav Sharma",
            designation: "IB Member",
            dp: "",
            xp: 13,
        },
    ];

    return (
        <DashboardLayout
            title="Dashboard | ACM at PEC"
            heading={<div className={styles.title}>Hey {username},</div>}
        >
            <div className={styles.trending}>
                
                <h2 className={styles.header}>What&#39;s going on?</h2>
                <Trending trendingType="home" />
            </div>
            <div className={styles.details}>
                <div className={styles.contributors}>
                    <h2 className={styles.header}>Top contributors</h2>
                    <div className={styles.leaderboard}>
                        {leaderboard.map((user, index) => {
                            return <LeaderboardItem user={user} key={index} />;
                        })}
                    </div>
                </div>
                <div className={styles.space}></div>
                <NextEventCard />
            </div>
        </DashboardLayout>
    );
}

export default DashboardHome;

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { req } = context;
    const cookies = parseCookies({ req });
    const token = cookies[Common.AUTHORIZATION];
    const username = cookies[Common.USERNAME];
    const photo = cookies[Common.PHOTO];
    if (!token) {
        return {
            redirect: {
                destination: "/login",
                permanent: false,
            },
        };
    }

    return {
        props: {
            username, photo
        },
    };
}
