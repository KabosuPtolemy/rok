import { useState, useRef, useEffect } from "react"
import Styles from "../styles/Dropdown.module.css"
import { IoArrowDownSharp, IoArrowUpSharp } from "react-icons/io5"

import {
  getIsConnected,
  getNetwork,
  getIconColor,
  getUserIcon,
} from "../store/slices/userSlice"

import { useSelector, useDispatch } from "react-redux"

import { supportedChains } from "../utils/supportedChains"

import { changeNetwork, formatNetworkName } from "../utils/walletOperations"

export default function DropdownMenu() {
  const [isExpanded, setIsExpanded] = useState(false)
  const containerRef = useRef(null)

  const dispatch = useDispatch()

  const selectedNetwork = useSelector(getNetwork)
  const isConnected = useSelector(getIsConnected)

  async function handleNetworkChange(newNetwork) {
    await changeNetwork(newNetwork, dispatch)
    setIsExpanded(false)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsExpanded(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  function displayButtons() {
    if (isConnected) {
      const buttonsList = []
      for (const network of supportedChains) {
        if (network.chainId != selectedNetwork.chainId) {
          buttonsList.push(
            <div
              key={network.chainId}
              className={Styles.network_button_container}
              onClick={async () => await handleNetworkChange(network)}
            >
              <img src={network.img} className={Styles.network_image}></img>
              <div className={Styles.network_name}>
                {formatNetworkName(network.name)}
              </div>
            </div>
          )
        }
      }
      return buttonsList
    }
  }

  function selectedChain() {
    return (
      <div
        className={
          isExpanded
            ? Styles.selected_chain_container_expanded
            : Styles.selected_chain_container_not_expanded
        }
        onClick={() =>
          isExpanded ? setIsExpanded(false) : setIsExpanded(true)
        }
      >
        <img src={selectedNetwork.img} className={Styles.network_image}></img>
        <div className={Styles.network_name}>
          {formatNetworkName(selectedNetwork.name)}
        </div>
        {isExpanded ? (
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

  function expandedDropdown() {
    return (
      <div className={Styles.dropdown_expanded} ref={containerRef}>
        {selectedChain()}
        {displayButtons()}
      </div>
    )
  }

  function notExpandedDropdown() {
    return <div className={Styles.dropdown_not_expanded}>{selectedChain()}</div>
  }

  if (isConnected) {
    return isExpanded ? expandedDropdown() : notExpandedDropdown()
  }
}
