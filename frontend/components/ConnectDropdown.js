import React, { useState, useEffect, useRef } from "react"
import { useSelector } from "react-redux"
import Jazzicon, { jsNumberForAddress } from "react-jazzicon"
import { IoArrowDownSharp, IoArrowUpSharp } from "react-icons/io5"
import { FaUser } from "react-icons/fa"

import { preformAddressSlice } from "../utils/walletOperations"
import {
  getIsConnected,
  getAddress,
  getIconColor,
  getUserIcon,
} from "../store/slices/userSlice"

import DropdownMenu from "./DropdownMenu"
import Authorization from "./Authorization"
import AuthForm from "./AuthForm"

import Styles from "../styles/ConnectDropdown.module.css"
import { renderIcon } from "../utils/renderIcon"

export default function ConnectDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const containerRef = useRef(null)
  const expandedRef = useRef(null)

  const address = useSelector(getAddress)
  const isConnected = useSelector(getIsConnected)
  const selectedIcon = useSelector(getUserIcon)
  const selectedColor = useSelector(getIconColor)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        (containerRef.current && !containerRef.current.contains(event.target),
        expandedRef.current && !expandedRef.current.contains(event.target))
      ) {
        setIsOpen(false)
        setIsExpanded(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen)
  }
  const handleAddressToggle = () => {
    setIsExpanded(!isExpanded)
  }

  function notExpandedAddressContainer() {
    return (
      <div className={Styles.arrowContainer}>
        <div className={Styles.address}>
          <div className={Styles.jazzIcon}>
            {renderIcon(
              selectedIcon,
              selectedColor,
              jsNumberForAddress(address),
              25
            )}
            {/* <Jazzicon diameter={25} seed={jsNumberForAddress(address)} /> */}
          </div>
          {preformAddressSlice(address)}
        </div>
        {!isExpanded && <IoArrowDownSharp className={Styles.arrowIcon} />}
      </div>
    )
  }

  function expandedAddressContainer() {
    return (
      <button
        onClick={handleAddressToggle}
        ref={expandedRef}
        className={Styles.expandedAddressContainer}
      >
        {isExpanded ? (
          <>
            <div className={Styles.arrowContainer}>
              {notExpandedAddressContainer()}
              {isExpanded && <IoArrowUpSharp className={Styles.arrowIcon} />}
            </div>
            <a href="./profile" className={Styles.addressDropdownTitle}>
              <FaUser className={Styles.addressDropdownIcon} />
              Your profile
            </a>
          </>
        ) : (
          notExpandedAddressContainer()
        )}
      </button>
    )
  }

  function addressContainer() {
    return (
      <div>
        {isExpanded ? (
          expandedAddressContainer()
        ) : (
          <button
            onClick={handleAddressToggle}
            className={Styles.notExpandedAddressContainer}
          >
            {notExpandedAddressContainer()}
          </button>
        )}
      </div>
    )
  }

  function notConnected() {
    return (
      <div className={Styles.dropdown} ref={containerRef}>
        <button
          className={Styles.dropdownToggle}
          onClick={handleDropdownToggle}
        >
          {isOpen ? (
            <span className={Styles.dropdownToggleExpanded}>With</span>
          ) : (
            <span className={Styles.dropdownToggleNotExpanded}>Connect!</span>
          )}
        </button>
        {isOpen && (
          <div className={Styles.dropdownMenu}>
            <Authorization />
            <p className={Styles.dropdownToggleExpanded2}>Or</p>
            <AuthForm />
          </div>
        )}
      </div>
    )
  }

  function Connected() {
    return (
      <div className={Styles.connectedContainer}>
        <DropdownMenu />
        {addressContainer()}
      </div>
    )
  }

  if (isConnected) {
    return Connected()
  } else {
    return notConnected()
  }
}
