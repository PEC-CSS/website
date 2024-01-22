import Head from "next/head";
import {ReactNode} from "react";
import Footer from "../common/Footer/Footer";
import Header from "../common/Header/Header";
import styles from "../../styles/components/PageLayout.module.scss";
import Banner from "../banner/Banner";
import {Common} from "../../constants/common";
import NoSSRWrapper from "../common/NoSSRWrapper";
import Script from "next/script";

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

function PageLayout({title, children, description, heading, bannerColor, footerColor, branch }: Props) {
    return (
        <div className={styles.page}>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description}/>

                <link rel="icon" href="/assets/logos/acm.png"/>
                <meta name="author" content="PEC ACM CSS" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <meta name='application-name' content='PEC CSS | ACM at PEC' />
                <meta name='apple-mobile-web-app-capable' content='yes' />
                <meta name='apple-mobile-web-app-status-bar-style' content='default' />
                <meta name='apple-mobile-web-app-title' content={title} />
                <meta name='format-detection' content='telephone=no' />
                <meta name='mobile-web-app-capable' content='yes' />
                <meta name='msapplication-config' content='/assets/icons/browserconfig.xml' />
                <meta name='msapplication-TileColor' content='#0075FF' />
                <meta name='msapplication-tap-highlight' content='no' />
                <meta name='theme-color' content={Common.primaryColor} />

                <link rel='apple-touch-icon' href='/assets/icons/apple-touch-icon.png' />
                <link rel='apple-touch-icon' sizes='152x152' href='/assets/icons/apple-touch-icon.png' />
                <link rel='apple-touch-icon' sizes='180x180' href='/assets/icons/apple-touch-icon.png' />
                <link rel='apple-touch-icon' sizes='167x167' href='/assets/icons/apple-touch-icon.png' />

                <link rel='icon' type='image/png' sizes='32x32' href='/assets/icons/favicon-32x32.png' />
                <link rel='icon' type='image/png' sizes='16x16' href='/assets/icons/favicon-16x16.png' />
                <link rel='manifest' href='/manifest.json' />
                <link rel='mask-icon' href='/assets/icons/safari-pinned-tab.svg' color='#0075FF' />
                <link rel='shortcut icon' href='/assets/icons/favicon.ico' />
                <link rel='canonical' href='https://www.pecacm.com/' />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.pecacm.com/" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content="https://www.pecacm.com/assets/logos/acm.png" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:height" content="350" />
                <meta property="og:image:width" content="350" />
                <meta property='og:site_name' content='PEC CSS | ACM at PEC' />

                <meta name="keywords" content="pecacm, acmcss, punjab engineering college, pec, pec cse, pec chandigarh, saasc, scc, drams, peb, eeb, heb, Technical Society of PEC, Coding Club of PEC, ai, cp, dev, socials, wit, cyber, punjabi editorial board pec, pecfest, iit chandigarh, iitc, chandigarh, pwoc, ideathon, codebattle, hackathons, codeblooded, kaggle, tips and tricks" />

                {/* TODO : Verification pending */}
                <meta name="google-site-verification" content="wJCASasAYLy_hM-ndSessna54e0JH7VCzmg5asx1aFc" />

                <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
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
            <NoSSRWrapper>
                <Header />
            </NoSSRWrapper>
            <div className={styles.children}>
                <Banner heading={heading} color={bannerColor ? bannerColor : Common.primaryColor}/>
                {children}
            </div>
            <Footer color={footerColor ? footerColor : Common.primaryColor} branch={branch ? branch : "none"} />
        </div>
    );
}

export default PageLayout;
