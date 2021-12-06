import type { AppProps } from 'next/app'
import 'antd/dist/antd.css'
import { Styles } from '../styles/styles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Styles />
      <Component {...pageProps} />{' '}
    </>
  )
}

export default MyApp
