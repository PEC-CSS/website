import DashboardLayout from "../../components/layout/DashboardLayout";
import styles from "../../styles/pages/DashboardHome.module.scss";
import Trending from "../../components/home/Trending";
import { LeaderboardItem } from "../../components/dashboard/LeaderboardItem";
import NextEventCard from "../../components/common/NextEventCard/NextEventCard";
import { parseCookies } from "nookies";
import { GetServerSidePropsContext } from "next";
import { Common } from "../../constants/common";
import { fetchWrapper } from "../../util/httpWrapper";

function DashboardHome({ username, photo, leaderboard}: any) {    

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
                        {
                            leaderboard &&
                            leaderboard  
                                .slice(0, 5)
                                .map((user: any, index: any) => {
                                    return <LeaderboardItem user={user} key={index} />;
                                })
                        }
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

    const leaderboard = await fetchWrapper.get({ url: "v1/user/leaderboard", token });

    return {
        props: {
            username, photo, leaderboard
        },
    };
}