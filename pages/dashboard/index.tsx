import DashboardLayout from "../../components/layout/DashboardLayout";
import styles from "../../styles/pages/DashboardHome.module.scss";
import Trending from "../../components/home/Trending";
import { LeaderboardItem } from "../../components/dashboard/LeaderboardItem";
import NextEventCard from "../../components/common/NextEventCard/NextEventCard";
import { parseCookies } from "nookies";
import { GetServerSidePropsContext } from "next";
import { Common } from "../../constants/common";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import { useEffect, useState } from "react";
import { getUser } from "../../repository/user";
import { setUser } from "../../redux/slices/userSlice";
import { User } from "../../types/user";

function DashboardHome() {
    const dispatch = useDispatch();
    const user = useSelector<AppState, User | null>((state) => state.user);

    const [userState, setUserState] = useState<User | null>(null);

    useEffect(() => {
        // if (user == null) {
        //     pushUserToRedux();
        // }
        if(userState == null) {
            pushUserToRedux();
        }
    }, [user]);

    const pushUserToRedux = async () => {
        const response = await getUser();
        // dispatch(setUser(response as User));
        setUserState(response as User)
    };

    // dummy leaderboard
    const leaderboard = [
        {
            name: "Ken",
            designation: "Member",
            dp: "https://avatars.githubusercontent.com/u/78747188?v=4",
            xp: 10,
        },
        {
            name: "Ken",
            designation: "Member",
            dp: "https://avatars.githubusercontent.com/u/78747188?v=4",
            xp: 9,
        },
        {
            name: "Ken",
            designation: "Member",
            dp: "https://avatars.githubusercontent.com/u/78747188?v=4",
            xp: 3,
        },
        {
            name: "Ken",
            designation: "Member",
            dp: "https://avatars.githubusercontent.com/u/78747188?v=4",
            xp: 2,
        },
        {
            name: "Ken",
            designation: "Member",
            dp: "https://avatars.githubusercontent.com/u/78747188?v=4",
            xp: 1,
        },
    ];

    return (
        <DashboardLayout
            title="Dashboard | ACM at PEC"
            heading={<div className={styles.title}>Hey {userState?.designation},</div>}
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

    if (!token) {
        return {
            redirect: {
                destination: "/login",
                permanent: false,
            },
        };
    }

    return {
        props: {},
    };
}
