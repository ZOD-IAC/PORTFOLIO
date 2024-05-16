import "@/styles/globals.css";
import Navigation from "./CommonNAV&FOOT/Navigation";
import Footer from "./CommonNAV&FOOT/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Navigation/>
    <Component {...pageProps} />
    <Footer/>
    </>
  ) 
}
