import "@/styles/globals.css";
import Navigation from "./CommonNAV&FOOT/Navigation";
export default function App({ Component, pageProps }) {
  return (
    <>
    <Navigation/>
    <Component {...pageProps} />
    </>
  ) 
}
