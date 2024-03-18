import Styles from "../styles/Crowdfunding.module.css"
import Head from "next/head.js"
import NftProjectCard from "../components/NftProjectCard.js"
import SubmitButton from "../components/submitButton"

import { useEffect } from "react"

import { getChainId, getProjects } from "../store/slices/nftProjectSlice"
import {
  getNetwork,
  setSelectedPage,
  getIsConnected,
} from "../store/slices/userSlice"
import { useSelector, useDispatch } from "react-redux"
import { FirebaseService } from "../utils/FirebaseService"
import { nftProjects } from "../utils/nftTestProjects"

export default function Launchpad() {
  const dispatch = useDispatch()

  const projects = useSelector(getProjects)
  const chainId = useSelector(getChainId)
  const isConnected = useSelector(getIsConnected)

  const network = useSelector(getNetwork)

  useEffect(() => {
    dispatch(setSelectedPage("crowdfunding"))
  }, [])

  function getNftProjectStage() {
    const ps = []

    for (let i = 0; i < projects.length; i++) {
      ps.push(
        <NftProjectCard
          key={i.toString() + "_project"}
          nftProject={projects[i]}
        />
      )
    }
    return ps
  }

  const standByComponentNotConnected = () => {
    return (
      <div className={Styles.standby_container}>
        <center>
          <div className={Styles.standby}>
            <img src="/metamask.png" className={Styles.metamask_image}></img>
            <div className={Styles.standby_text}>
              Please connect your metamask wallet.
            </div>
          </div>
        </center>
      </div>
    )
  }

  const standByComponentIsConnected = () => {
    return (
      <div className={Styles.standby_container}>
        <center>
          <div className={Styles.standby_connected}>
            <div className={Styles.standby_text}>
              At the moment there are no NFT projects for{" "}
              <b>{network.name.split(" ")[0].toUpperCase()}</b> chain.
            </div>
          </div>
        </center>
      </div>
    )
  }

  const mainCrowdfundingView = () => {
    if (isConnected) {
      if (chainId && projects.length > 0) {
        return (
          <div>
            <center>
              <div className={Styles.topSepoliaLink}>
                <h4 className={Styles.title}>
                  <a
                    href="https://sepolia-faucet.pk910.de/"
                    target="_blank"
                    className={Styles.titleLink}
                  >
                    Need SepoliaETH? Click me!
                  </a>
                </h4>
              </div>
            </center>
            <div className={Styles.nftprojectstage}>{getNftProjectStage()}</div>
          </div>
        )
      } else {
        return standByComponentIsConnected()
      }
    } else {
      return standByComponentNotConnected()
    }
  }

  const head = () => {
    return (
      <Head>
        <title>ROK Finance | NFT CrowdFunding</title>
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

  // async function addData() {
  //   const firebase = new FirebaseService()
  //   firebase.initApp()
  //   for (const project of nftProjects) {
  //     await firebase.add("projects", project)
  //   }
  // }

  return (
    <div className={Styles.launchpadpage}>
      {head()}
      <div className={Styles.top_link_container}>
        {/* <center>
          <div className={Styles.top_link}>
            <h4 className={Styles.title}>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScP7o4UHr86xhFKP4TfrqDeZ_NR5NIp287fZ_ZrOLGiJTkTzQ/viewform"
                target="_blank"
                className={Styles.titleLink}
              >
                We are open for public beta launch. Submit your NFT project!
              </a>
            </h4>
          </div>
        </center> */}
        <SubmitButton style={{ display: "flex", justifyContent: "center" }} />
      </div>
      {mainCrowdfundingView()}
      <div className={Styles.footer}>
        <center>
          <div className={Styles.footer_content}>
            <div className={Styles.footerText}>
              Didn't find what you're looking for?
            </div>
            <div className={Styles.footerText}>
              <a
                href="https://discord.gg/WPcuXpSvpX"
                target="_blank"
                className={Styles.footerTextLink}
              >
                JOIN OUR DISCORD
              </a>
            </div>
            <div className={Styles.footerText}>
              And get notified for the next crowdfunding batch!
            </div>
          </div>
        </center>
      </div>
    </div>
  )
}
