import { AppProps } from 'next/app'
import '../styles/global.scss'
import { Header } from '../components/Header/index';
import { SessionProvider } from 'next-auth/react'


function MyApp({ Component, pageProps }: AppProps | any) {
  return (
    <SessionProvider>
      <Header/>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
