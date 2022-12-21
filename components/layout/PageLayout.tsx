import Head from "next/head";
import { ReactNode } from "react";
import Footer from "../common/Footer/Footer";
import Header from "../common/Header/Header";
import styles from "../../styles/components/PageLayout.module.scss";

type Props = {
    title: string;
    description?: string;
    children?: ReactNode;
};

function PageLayout({ title, children, description }: Props) {
    return (
        <div className={styles.page}>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default PageLayout;
