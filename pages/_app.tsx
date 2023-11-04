import "../styles/app.scss";
import type { AppProps } from "next/app";
import { Josefin_Sans } from "next/font/google";
import { useRouter } from "next/router";
import React from "react";
import { LinearProgress } from "@mui/material";
import { SessionProvider } from "next-auth/react";

const font = Josefin_Sans({
    preload: false,
});

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    const router = useRouter();
    const [isLoading, setIsLoading] = React.useState(false);

    React.useEffect(() => {
        const handleRouteChangeStart = (url: any, { shallow }: any) => {
            setIsLoading(true);
        };
        const handleRouteChangeComplete = (url: any, { shallow }: any) => {
            setIsLoading(false);
        };
        router.events.on("routeChangeStart", handleRouteChangeStart);
        router.events.on("routeChangeComplete", handleRouteChangeComplete);

        return () => {
            router.events.on("routeChangeStart", handleRouteChangeStart);
            router.events.on("routeChangeComplete", handleRouteChangeComplete);
        };
    });

    return (
        <SessionProvider session={session}>
            <main className={font.className} style={{ position: "relative" }}>
                {isLoading ? <LinearProgress /> : null}
                <Component {...pageProps} />
            </main>
        </SessionProvider>
    );
}

export default App;
