import '../styles/app.scss'
import type { AppProps } from 'next/app'
import {Josefin_Sans} from 'next/font/google';

const font = Josefin_Sans({
  preload: false
});
export default function App({ Component, pageProps }: AppProps) {
  return <main className={font.className}>
    <Component {...pageProps} />
  </main>
}