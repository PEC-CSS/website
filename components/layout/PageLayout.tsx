import Head from "next/head";
import {ReactNode} from "react";
import Footer from "../common/Footer/Footer";
import Header from "../common/Header/Header";
import styles from "../../styles/components/PageLayout.module.scss";
import Banner from "../banner/Banner";

type Props = {
    title: string;
    description?: string;
    heading?: string | JSX.Element;
    children?: ReactNode;
};

function PageLayout({title, children, description, heading}: Props) {
    return (
        <div className={styles.page}>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description}/>
            </Head>
            <Header/>
            <div className={styles.children}>
                <Banner heading={heading}/>
                {children}
            </div>
            <Footer/>
        </div>
    );
}

export default PageLayout;
