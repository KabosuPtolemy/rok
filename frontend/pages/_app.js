import "../styles/globals.css"
import Navbar from "../components/Navbar"
import Custom404 from "./404"

import { store } from "../store/store"
import { Provider } from "react-redux"

import GoogleAnalytics from "@bradgarropy/next-google-analytics"

function MyApp({ Component, pageProps }) {
  if (Component === undefined) {
    return <Custom404 />
  }
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <GoogleAnalytics measurementId="G-0Z7BY2XP70" />
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
