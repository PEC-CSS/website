import Head from "next/head";
import { ReactNode } from "react";
import styles from "../../styles/components/PageLayout.module.scss";
import Banner from "../banner/Banner";
import { Sidebar } from "../dashboard/Sidebar";
import NoSSRWrapper from "../common/NoSSRWrapper";

type Props = {
    title: string;
    description?: string;
    heading?: string | JSX.Element;
    children?: ReactNode;
};

function DashboardLayout({ title, children, description, heading }: Props) {
    return (
        <div className={styles.dashboard}>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>

            <div className={styles.children}>
                <NoSSRWrapper>
                    <Sidebar />
                </NoSSRWrapper>
                <div className={styles.content}>
                    <Banner heading={heading} />
                    {children}
                </div>
            </div>
        </div>
    );
}

export default DashboardLayout;
