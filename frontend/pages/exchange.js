import Styles from "../styles/Exchange.module.css"
import Head from "next/head"
import { useState, useEffect } from "react"

import { AiOutlineInfoCircle } from "react-icons/ai"
import { useSelector } from "react-redux"
import { getAddress } from "../store/slices/userSlice"
import { ethers } from "ethers"

const head = () => {
  return (
    <Head>
      <title>ROK Finance | Exchange</title>
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
  )
}

export default function Swap() {
  const [balance, setBalance] = useState(null)
  const address = useSelector(getAddress)

  useEffect(() => {
    async function getBalance() {
      const provider = new ethers.providers.JsonRpcProvider(
        "https://eth-mainnet.g.alchemy.com/v2/tE-oF4a0xHEMe90d6tJU9ePjG9DTWPKi"
      )

      // Get the user's ETH balance
      if (address) {
        const b = await provider.getBalance(address)
        setBalance(ethers.utils.formatEther(b))
      } else {
      }
    }

    getBalance()
  })

  return (
    <div className={Styles.container}>
      {head()}
      <center>
        <div className={Styles.card}>
          <p className={Styles.swapTitle}>Swap</p>
          <div className={Styles.swapbox}>
            <div className={Styles.swapboxtop}>
              <a className={Styles.amountTop}>0.015</a>
              <div className={Styles.token}>
                <img
                  src="./chain_images/ethereum.png"
                  alt="eth"
                  className={Styles.tokenImg}
                />
                <a className={Styles.tokenTextTop}>ETH</a>
              </div>
            </div>

            {balance && (
              <div
                className={
                  balance >= 0.015 ? Styles.normalText : Styles.redText
                }
              >
                Balance: {parseInt(balance)}
              </div>
            )}

            <div className={Styles.bottom}>
              <a className={Styles.swapTitleBottom}>For</a>
              <div className={Styles.swapboxbottom}>
                <div>
                  <a className={Styles.amountBottom}>100</a>
                </div>
                <div className={Styles.token}>
                  <img
                    src="rokToken.svg"
                    alt="rok"
                    className={Styles.tokenImg}
                  />
                  <a className={Styles.tokenTextBottom}>ROK</a>
                </div>
              </div>

              <hr className={Styles.divider}></hr>
              <div className={Styles.infoContainer}>
                <AiOutlineInfoCircle className={Styles.infoImg} />
                <a className={Styles.infoText}>
                  Note: ETH to ROK price is fixed
                </a>
              </div>

              <div>
                <button className={Styles.swapButton}>Exchange</button>
              </div>
            </div>
          </div>
        </div>
      </center>
    </div>
  )
}
