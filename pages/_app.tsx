import "../styles/app.scss";
import type { AppProps } from "next/app";
import { Josefin_Sans } from "next/font/google";
import { wrapper } from "../redux/store";
import { SessionProvider } from "next-auth/react";

const font = Josefin_Sans({
    preload: false,
});

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    return (
        <main className={font.className}>
            <SessionProvider session={session}>
                <Component {...pageProps} />
            </SessionProvider>
        </main>
    );
}

export default wrapper.withRedux(App);
