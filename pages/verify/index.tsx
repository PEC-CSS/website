import { useRouter } from "next/router";
import PageLayout from "../../components/layout/PageLayout";
import { useState } from "react";
import { verify } from "../../repository/auth";
import Link from "next/link";
import styles from "../../styles/pages/verify.module.scss";
import { GetServerSidePropsContext } from "next";
import { Common } from "../../constants/common";
import { parseCookies } from "nookies";

export default function Index() {
    const { token } = useRouter().query;
    const [verified, setVerified] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handle = async (token: string) => {
        setLoading(true);
        const res = await verify({ token });
        if (res) {
            setVerified(true);
        } else {
            setError(true);
        }

        setLoading(false);
    };

    if (error) {
        return <p className={styles.message}>Error occured!</p>;
    }

    return (
        <PageLayout title="Verify Email" heading={"Verification"}>
            {verified ? (
                <div className={styles.verified}>
                    <p className={styles.message}>
                        User Verified.
                        <Link href={"/login"} className={styles.link}>
                            <p className={styles.message}>
                                Login to continue
                            </p>
                        </Link>
                    </p>
                </div>
            ) : (
                <div className={styles.first}>
                    <button
                        className={styles.button}
                        onClick={() => handle(token as string)}
                        disabled={verified}
                    >
                        {loading ? "Loading..." : "Click to verify."}
                    </button>
                </div>
            )}
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
