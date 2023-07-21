import Head from "next/head";
import {ReactNode} from "react";
import Footer from "../common/Footer/Footer";
import Header from "../common/Header/Header";
import styles from "../../styles/components/PageLayout.module.scss";
import Banner from "../banner/Banner";
import {Common} from "../../constants/common";

type Props = {
    title: string;
    description?: string;
    heading?: string | JSX.Element;
    children?: ReactNode;
    bannerColor?: string;
    footerColor?: string;
    branch?: string;
    headerImgUrl?: string;
};

function PageLayout({title, children, description, heading, bannerColor, footerColor, branch, headerImgUrl }: Props) {
    return (
        <div className={styles.page}>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description}/>
            </Head>
            {headerImgUrl ? <Header imgUrl={headerImgUrl} /> : <Header />}
            <div className={styles.children}>
                <Banner heading={heading} color={bannerColor ? bannerColor : Common.primaryColor}/>
                {children}
            </div>
            <Footer color={footerColor ? footerColor : Common.primaryColor} branch={branch ? branch : "none"} />
        </div>
    );
}

export default PageLayout;
