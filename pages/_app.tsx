import "../styles/app.scss";
import type { AppProps } from "next/app";
import { Josefin_Sans } from "next/font/google";
import { useRouter } from "next/router";
import React from "react";
import { LinearProgress } from "@mui/material";
import { SessionProvider } from "next-auth/react";
import {useDispatch, useSelector} from "react-redux";
import {wrapper} from "../redux/store";
import {TrendingCard} from "../components/home/Trending";
import {selectTrendingState, setLoadingCards, setTrendingCards} from "../redux/slices/trendingSlice";

const font = Josefin_Sans({
    preload: false,
});

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    const router = useRouter();
    const [isLoading, setIsLoading] = React.useState(false);
    const trendingData = useSelector(selectTrendingState)
    const dispatch = useDispatch();

    const fetchTrendingCards = async (branchAlias: string) => {
        const res = await fetch('/api/trending/get', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                branch: branchAlias
            }),
        });

        if (res.status !== 200) {
            throw new Error('Failed to fetch trending data');
        }

        const trending = await res.json();
        return trending.result as TrendingCard[];
    }

    React.useEffect(() => {
        dispatch(setLoadingCards(true))
        const key = "home"
            fetchTrendingCards(key)
                .then((res) => {
                    dispatch(setTrendingCards(res))
                })
                .catch((error : Error) => {
                    console.log(error.message)
                    dispatch(setTrendingCards([]))
                })
                .finally(() => {
                    setTimeout( () => {
                        dispatch(setLoadingCards(false))
                    }, 100)
                })
    }, [dispatch]);


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

export default wrapper.withRedux(App);
