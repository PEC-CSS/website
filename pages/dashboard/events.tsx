import { GetServerSidePropsContext } from "next";
import DashboardLayout from "../../components/layout/DashboardLayout";
import { Common } from "../../constants/common";
import { parseCookies } from "nookies";

function Events() {
    return (
        <DashboardLayout title="Events | ACM at PEC" heading="Events">
            EVENTS
        </DashboardLayout>
    );
}

export default Events;

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
