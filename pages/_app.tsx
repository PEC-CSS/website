import "../styles/app.scss";
import type { AppProps } from "next/app";
import { Josefin_Sans } from "next/font/google";
import { useRouter } from "next/router";
import React from "react";
import { LinearProgress } from "@mui/material";
import { SessionProvider } from "next-auth/react";
import zIndex from "@mui/material/styles/zIndex";

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
            {isLoading && (
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 999, // Set a high z-index to overlay on top
                    }}
                >
                    <LinearProgress />
                </div>
                )}
                <Component {...pageProps} />
            </main>
        </SessionProvider>
    );
}

export default App;
