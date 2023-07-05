import '../styles/globals.scss'
import type { AppProps } from 'next/app'


// bansal entry
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
