import PageLayout from "../../components/layout/PageLayout";
import styles from "../../styles/pages/verify.module.scss";
import { GetServerSidePropsContext } from "next";
import getServerCookieData from "../../lib/getServerCookieData";

export default function Welcome() {
    return (
        <PageLayout title="Welcome to PECACM" heading={"Welcome to PEC ACM!"}>
            <p className={styles.message}>
                Please check pec id for verification mail.
            </p>
        </PageLayout>
    );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const {data} = getServerCookieData(context);
    const token = data?.token;

    if (token) {
        return {
            redirect: {
                destination: "/dashboard",
                permanent: true,
            },
        };
    }

    return {
        props: {},
    };
}
