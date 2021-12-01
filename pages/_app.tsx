import type { AppProps } from 'next/app'
import "antd/dist/antd.css";
import { Styles } from '../styles/styles'
import Header from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return <><Styles /><Header/><Component {...pageProps} /> </>
}

export default MyApp
