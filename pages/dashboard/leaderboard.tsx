import DashboardLayout from "../../components/layout/DashboardLayout";
import { GetServerSidePropsContext } from "next";
import { fetchWrapper } from "../../util/httpWrapper";
import styles from "../../styles/pages/DashboardHome.module.scss";
import { LeaderboardItem } from "../../components/dashboard/LeaderboardItem";
import { useEffect, useState } from "react";
import getServerCookieData from "../../lib/getServerCookieData";

function Leaderboard({ data }: any) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (data) {
            setLoading(false);
        }
    }, [data]);    

    return (
        <DashboardLayout title="Leaderboard | ACM at PEC" heading="Leaderboard">
            <div className={styles.details}>
                <div style={{ width: "100%", margin: "2rem" }}>
                    <div className={styles.contributors}>
                        <h2 className={styles.header}>🏆 Contributors</h2>
                        <div className={styles.leaderboard}>
                            {data && !loading ? (
                                data.map((user: any, index: any) => (
                                    <LeaderboardItem user={user} key={index} />
                                ))
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}

export default Leaderboard;

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const {data} = getServerCookieData(context);
    const token = data.token;

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
            data: leaderboard,
        },
    };
}