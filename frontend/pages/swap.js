import { SwapWidget } from "@uniswap/widgets"
import "@uniswap/widgets/fonts.css"
import Head from "next/head"

import { useEffect } from "react"

import { useDispatch, useSelector } from "react-redux"
import {
  setSelectedPage,
  getNetwork,
  getIsConnected,
} from "../store/slices/userSlice"

import { ethers } from "ethers"
import Styles from "../styles/profile.module.css"
import { AiOutlineInfoCircle, AiFillWarning } from "react-icons/ai"

const jsonRpcUrlMap = {
  1: ["https://eth-mainnet.g.alchemy.com/v2/tE-oF4a0xHEMe90d6tJU9ePjG9DTWPKi"],
}

const theme = {
  primary: "#000",
  secondary: "#666",
  interactive: "#60abec",
  container: "#353535",
  module: "#202020",
  accent: "#50abec",
  outline: "#656565",
  dialog: "#FFF",
  fontFamily: "Inter",
  borderRadius: 0.8,
}

const style = {
  color: "#bbb",
  cursor: "default",
  width: "fit-content",
  height: "fit-content",
  padding: "1% 10%",
  fontSize: "40px",
  fontWeight: "500",
  letterSpacing: "2%",
  margin: "20% 1% 0 1%",
  backgroundColor: "#2c2c2c",
  borderRadius: "0.9rem",
  flexWrap: "nowrap",
}

const container = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "50vh",
}

function UserNotConnected() {
  return (
    <div style={container}>
      <div className={Styles.warningContainer}>
        <AiFillWarning className={Styles.notIcon} />
        <p className={Styles.notTitle}>you are not connected</p>
      </div>
      <div className={Styles.notSubContainer}>
        <AiOutlineInfoCircle className={Styles.notSubicon} />
        <p className={Styles.notSubtitle}>
          To swap your tokens connect to the ethereum network!
        </p>
      </div>
    </div>
  )
}

// https://docs.uniswap.org/sdk/widgets/swap-widget

export default function Uniswap() {
  const dispatch = useDispatch()
  const network = useSelector(getNetwork)
  const isConnected = useSelector(getIsConnected)
  let web3Provider = null

  useEffect(() => {
    dispatch(setSelectedPage("swap"))
    if (typeof window !== "undefined" && window.ethereum) {
      web3Provider = new ethers.providers.Web3Provider(window.ethereum, "any")
    }
  }, [])

  return (
    <div className="Uniswap">
      <Head>
        <title>ROK Finance | Swap</title>
        <meta
          name="description"
          content="The First NFT CrowdFunding Platform on ETH chain."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content="mzmbOWuK_aCn511x7jZh5ARjBwzAUQh9j2XhBG8h3p0"
        />
        <link rel="icon" href="/rok2.svg" />
        <link rel="apple-touch-icon" href="/rok2.svg" />
      </Head>
      <center>
        {isConnected ? (
          network && network.name !== "Sepolia" ? (
            <SwapWidget
              provider={web3Provider}
              width="40%"
              jsonRpcUrlMap={jsonRpcUrlMap}
              theme={theme}
            />
          ) : (
            <h1 style={style}>{network.name} is currently unsupported.</h1>
          )
        ) : (
          <UserNotConnected />
        )}
      </center>
    </div>
  )
}
