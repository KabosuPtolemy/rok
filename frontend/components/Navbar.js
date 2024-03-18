import { useState } from "react"
import Link from "next/link"
import Styles from "../styles/Navbar.module.css"
import ConnectDropdown from "./ConnectDropdown"

import { Squash as Hamburger } from "hamburger-react"
import useMediaQuery from "../utils/useMediaQuery"
import HamburgerDropdown from "./HamburgerDropdown"

import { getSelectedPage, setSelectedPage } from "../store/slices/userSlice"
import { useSelector, useDispatch } from "react-redux"

export default function Navbar() {
  const selectedPage = useSelector(getSelectedPage)
  const dispatch = useDispatch()

  const [isOpen, setOpen] = useState(false)
  const isMiniScreen = useMediaQuery("(max-width: 1280px)")
  const miniIcon = useMediaQuery("(max-width: 700px)")

  function setPage(page) {
    dispatch(setSelectedPage(page))
  }

  const fullNavigationBar = () => {
    return (
      <div className={Styles.full_nav}>
        <div className={Styles.home} onClick={() => setPage(null)}>
          <Link href="/">
            <img
              alt="Home"
              src="/rok.svg"
              className={Styles.home_image}
              layout="fixed"
            ></img>
          </Link>
        </div>
        <div className={Styles.links}>
          {/* <div
            className={Styles.swap}
            style={{
              borderBottom:
                selectedPage == "exchange"
                  ? "#bbbbbb 2px solid"
                  : "transparent 2px solid",
            }}
            onClick={() => setPage("exchange")}
          >
            <Link href="/exchange">Pre-Sale</Link>
          </div> */}
          <div
            className={Styles.company}
            style={{
              borderBottom:
                selectedPage == "company"
                  ? "#bbbbbb 2px solid"
                  : "transparent 2px solid",
            }}
            onClick={() => setPage("company")}
          >
            <Link href="./company">Company</Link>
          </div>
          <div
            className={Styles.crowdfunding}
            style={{
              borderBottom:
                selectedPage == "crowdfunding"
                  ? "#bbbbbb 2px solid"
                  : "transparent 2px solid",
            }}
            onClick={() => setPage("crowdfunding")}
          >
            <Link href="/crowdfunding">NFT CrowdFunding</Link>
          </div>
          <div
            className={Styles.swap}
            style={{
              borderBottom:
                selectedPage == "swap"
                  ? "#bbbbbb 2px solid"
                  : "transparent 2px solid",
            }}
            onClick={() => setPage("swap")}
          >
            <Link href="./swap">Swap</Link>
          </div>
        </div>
        <div className={Styles.auth}>
          <ConnectDropdown />
        </div>
      </div>
    )
  }

  const miniNavigationBar = () => {
    return (
      <div className={Styles.mini_nav}>
        <div className={Styles.home}>
          <Link href="/">
            <img
              alt="Home"
              src="/rok.svg"
              className={Styles.home_image}
              layout="fixed"
            ></img>
          </Link>
        </div>
        <div className={Styles.menu}>
          <div className={Styles.hamburger}>
            <Hamburger
              size={miniIcon ? 24 : 26}
              rounded
              toggled={isOpen}
              onToggle={() => (isOpen ? setOpen(false) : setOpen(true))}
            />
          </div>
          {isOpen && (
            <HamburgerDropdown callbackFunction={() => setOpen(false)} />
          )}
        </div>
      </div>
    )
  }

  return isMiniScreen ? miniNavigationBar() : fullNavigationBar()
}
