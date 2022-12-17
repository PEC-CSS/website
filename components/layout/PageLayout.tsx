import Head from "next/head";
import { ReactNode } from "react";
import Footer from "../common/Footer/Footer";
import Header from "../common/Header/Header";

type Props = {
    title: string;
    description?: string;
    children?: ReactNode;
};

function PageLayout({ title, children, description }: Props) {
    return (
        <div>
            <Head>
                <title>{title} | ACM at PEC</title>
                <meta name="description" content={description} />
            </Head>
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default PageLayout;
