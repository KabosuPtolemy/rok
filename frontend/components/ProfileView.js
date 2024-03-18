import Styles from "../styles/Profile.module.css"

import React from "react"
import { jsNumberForAddress } from "react-jazzicon"
import { preformAddressSlice } from "../utils/walletOperations"
import {
  getAddress,
  getUserIcon,
  getIconColor,
  getUserStatus,
} from "../store/slices/userSlice"
import { useSelector } from "react-redux"

import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai"

import { renderStatus } from "../utils/renderStatus"
import { renderIcon } from "../utils/renderIcon"

const UserIcon = ({ address }) => {
  const selectedIcon = useSelector(getUserIcon)
  const selectedColor = useSelector(getIconColor)

  return (
    <div className={Styles.userIcon}>
      <div>
        {renderIcon(
          selectedIcon,
          selectedColor,
          jsNumberForAddress(address),
          75
        )}
      </div>
    </div>
  )
}

const InputContainer = () => {
  const address = useSelector(getAddress)

  return (
    <div className={Styles.inputContainer}>
      {/* E-Mail input start */}
      <div className={Styles.inputRow}>
        <p className={Styles.inputTitle}>E-mail:</p>
      </div>
      {/* E-mail input end */}

      {/* Wallet Address start */}
      <div className={Styles.inputRowContainer}>
        <div className={Styles.inputRow}>
          <p className={Styles.inputTitle}>Wallet Address:</p>
          <p className={Styles.address}>{address}</p>
        </div>
      </div>
      {/* Wallet Address end */}
    </div>
  )
}

export default function ProfileView() {
  const address = useSelector(getAddress)
  const selectedStatus = useSelector(getUserStatus)

  const statusIconId = "unverified"

  return (
    <div className={Styles.isContainer}>
      {/* left side info */}
      <div>
        {/* Icon */}
        <div className={Styles.iconContainer}>
          <UserIcon address={address} />
          <a
            href={`https://etherscan.io/address/${address}`}
            target="_blank"
            className={Styles.userAddress}
          >
            <img
              src="./Icons/etherscan_logo.svg"
              className={Styles.etherscan}
            />
            {preformAddressSlice(address)}
          </a>
        </div>
        {/*  */}
        <div>
          {/* status render */}
          <div className={Styles.statusRenderContainer}>
            <p className={Styles.statusRenderTitle}>Status:</p>
            <div className={Styles.statusRenderIcon}>
              {renderStatus(selectedStatus)}
            </div>
          </div>
          {/*  */}

          {/* kyc render */}
          <div className={Styles.statusRenderContainer}>
            <p className={Styles.statusRenderTitle}>KYC:</p>
            {statusIconId === "unverified" && (
              <AiFillCloseCircle className={Styles.kycRenderClose} />
            )}
            {statusIconId === "verified" && (
              <AiFillCheckCircle className={Styles.kycRenderCheck} />
            )}
          </div>
          {/*  */}
        </div>
      </div>
      {/*  */}

      {/* input container */}
      <div className={Styles.rightContainer}>
        <InputContainer />
      </div>
      {/*  */}
    </div>
  )
}
