import DashboardLayout from "../../components/layout/DashboardLayout";
import { parseCookies } from "nookies";
import { Common } from "../../constants/common";
import { GetServerSidePropsContext } from "next";

function Leaderboard() {
    return (
        <DashboardLayout title="Leaderboard | ACM at PEC" heading="Leaderboard">
            LEADERBOARD
        </DashboardLayout>
    )
}

export default Leaderboard;

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
