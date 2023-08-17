import PageLayout from "../../components/layout/PageLayout";
import styles from "../../styles/pages/verify.module.scss";
import { GetServerSidePropsContext } from "next";
import { Common } from "../../constants/common";
import { parseCookies } from "nookies";

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
    const { req } = context;
    const cookies = parseCookies({ req });
    const token = cookies[Common.AUTHORIZATION];

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
