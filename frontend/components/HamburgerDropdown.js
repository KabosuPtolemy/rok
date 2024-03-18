import { useState } from "react"

import Styles from "../styles/Hamburger.module.css"
import { supportedChains } from "../utils/supportedChains"

import { IoArrowDownSharp, IoArrowUpSharp } from "react-icons/io5"
import Link from "next/link"
import Jazzicon, { jsNumberForAddress } from "react-jazzicon"
import { useDispatch, useSelector } from "react-redux"
import {
  getAddress,
  getIsConnected,
  getNetwork,
  getSelectedPage,
  setSelectedPage,
} from "../store/slices/userSlice"
import {
  formatNetworkName,
  preformAddressSlice,
  connectToWallet,
  changeNetwork,
} from "../utils/walletOperations"
import AuthForm from "./AuthForm"

export default function HamburgerDropdown(props) {
  const [expanded, setExpanded] = useState(false)

  const selectedPage = useSelector(getSelectedPage)
  const dispatch = useDispatch()
  const isConnected = useSelector(getIsConnected)
  const address = useSelector(getAddress)
  const network = useSelector(getNetwork)

  function callbackFunction(page) {
    // This closes the dropdown
    props.callbackFunction()
    setPage(page)
  }

  function setPage(page) {
    dispatch(setSelectedPage(page))
  }

  const addressContainer = () => {
    return <div className={Styles.address}>{preformAddressSlice(address)}</div>
  }

  const networksContainer = () => {
    return (
      <div className={Styles.networks_list}>
        {selectedNetworkContainer()}
        {expanded && unselectedNetworkContainer()}
      </div>
    )
  }

  const selectedNetworkContainer = () => {
    return (
      <div
        className={
          expanded
            ? Styles.selected_network_expanded
            : Styles.selected_network_not_expanded
        }
        onClick={() => (expanded ? setExpanded(false) : setExpanded(true))}
      >
        <img className={Styles.network_img} src={network.img}></img>
        <div className={Styles.network_name}>
          {formatNetworkName(network.name)}
        </div>
        {expanded ? (
          <IoArrowUpSharp
            style={{ height: 35 }}
            className={Styles.arrow_icon}
          />
        ) : (
          <IoArrowDownSharp
            style={{ height: 35 }}
            className={Styles.arrow_icon}
          />
        )}
      </div>
    )
  }

  const unselectedNetworkContainer = () => {
    const list = supportedChains.filter(
      (value) => value.chainId != network.chainId
    )
    const returnable = []
    for (const n of list) {
      returnable.push(
        <div className={Styles.network} onClick={() => handleNetworkChange(n)}>
          <img src={n.img} className={Styles.network_img_unselected}></img>
          <div className={Styles.network_name}>{formatNetworkName(n.name)}</div>
        </div>
      )
    }
    return returnable
  }

  const linksContainer = () => {
    return (
      <div className={Styles.links}>
        <div
          className={Styles.company}
          style={{
            borderBottom:
              selectedPage == "company"
                ? "white 1.5px solid"
                : "transparent 1.5px solid",
          }}
          onClick={() => callbackFunction("company")}
        >
          <Link href="/company">Company</Link>
        </div>
        <div
          className={Styles.crowdfunding}
          style={{
            borderBottom:
              selectedPage == "crowdfunding"
                ? "white 1.5px solid"
                : "transparent 1.5px solid",
          }}
          onClick={() => callbackFunction("crowdfunding")}
        >
          <Link href="/crowdfunding">NFT CrowdFunding</Link>
        </div>
        <div
          className={Styles.swap}
          style={{
            borderBottom:
              selectedPage == "swap"
                ? "white 1.5px solid"
                : "transparent 1.5px solid",
          }}
          onClick={() => callbackFunction("swap")}
        >
          <Link href="/swap">Swap</Link>
        </div>
      </div>
    )
  }

  const connectContainer = () => {
    return (
      <div>
        <p
          className={Styles.title}
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "5px",
          }}
        >
          Connect with
        </p>
        <div
          className={Styles.connect}
          onClick={() => connectToWallet(dispatch)}
        >
          Metamask
        </div>
        <p
          className={Styles.title}
          style={{ display: "flex", justifyContent: "center" }}
        >
          or
        </p>
        <div className={Styles.connect} onClick={() => AuthForm()}>
          Sign in!
        </div>
      </div>
    )
  }

  async function handleNetworkChange(newNetwork) {
    await changeNetwork(newNetwork, dispatch)
    callbackFunction()
  }

  return (
    <div className={Styles.hamburger_dropdown}>
      {isConnected ? (
        <>
          <div className={Styles.title}>Authentication</div>
          <div className={Styles.jazzIcon}>
            <Jazzicon diameter={20} seed={jsNumberForAddress(address)} />
            {addressContainer()}
          </div>
          {networksContainer()}
          <div className={Styles.title}>Navigation</div>
          {linksContainer()}
        </>
      ) : (
        <>
          <div className={Styles.title}>Authentication</div>
          {connectContainer()}
          <div className={Styles.title}>Navigation</div>
          {linksContainer()}
        </>
      )}
    </div>
  )
}
