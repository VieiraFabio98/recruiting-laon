import { Header } from "@/components/Header"
import { AppProps } from "next/app"
import '../styles/global.scss'


function MyApp({ Component, pageProps}: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp