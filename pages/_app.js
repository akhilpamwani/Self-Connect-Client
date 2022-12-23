import '../styles/globals.css'
import { NavBar } from "../Components/NavBar/NavBar";
import Head from 'next/head'
import { Footer } from "../Components/Footer/Footer";
export default function App({ Component, pageProps }) {
  return ( 
  <>
  
  <Head>
   <meta name="viewport" content="width=device-width, initial-scale=1" />
  
</Head>

  <Component {...pageProps} />
  
  </>)
}
