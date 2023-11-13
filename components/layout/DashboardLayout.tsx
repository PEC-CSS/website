import Head from "next/head";
import { ReactNode } from "react";
import styles from "../../styles/components/PageLayout.module.scss";
import Banner from "../banner/Banner";
import { Sidebar } from "../dashboard/Sidebar";
import NoSSRWrapper from "../common/NoSSRWrapper";
import Script from "next/script";

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
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-5647L00T6L" />
            <Script id="google-analytics">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
        
                gtag('config', 'G-5647L00T6L');
                `}
            </Script>
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
