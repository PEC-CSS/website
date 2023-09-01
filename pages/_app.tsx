import "../styles/app.scss";
import type { AppProps } from "next/app";
import { Josefin_Sans } from "next/font/google";
import { wrapper } from "../redux/store";

const font = Josefin_Sans({
    preload: false,
});

function App({ Component, pageProps }: AppProps) {
    return (
        <main className={font.className}>
            <Component {...pageProps} />
        </main>
    );
}

export default wrapper.withRedux(App);
