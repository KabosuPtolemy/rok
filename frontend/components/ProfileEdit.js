import Styles from "../styles/Profile.module.css"

import React, { useState, useEffect, useRef } from "react"
import Jazzicon, { jsNumberForAddress } from "react-jazzicon"
import { preformAddressSlice } from "../utils/walletOperations"
import {
  getAddress,
  getUserIcon,
  setUserIcon,
  getIconColor,
  setIconColor,
  setUserStatus,
  getUserStatus,
} from "../store/slices/userSlice"
import { useSelector, useDispatch } from "react-redux"

// Icon import
import {
  GiFoxHead,
  GiAnubis,
  GiAngularSpider,
  GiBearFace,
  GiBrute,
  GiLabradorHead,
  GiMountaintop,
} from "react-icons/gi"
import { FaWolfPackBattalion, FaEthereum, FaBitcoin } from "react-icons/fa"
import { SiDogecoin } from "react-icons/si"
import {
  AiFillCheckCircle,
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
  AiOutlineWarning,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai"
import { FiEdit3 } from "react-icons/fi"
import { RiMoneyDollarCircleFill } from "react-icons/ri"
import { BsEaselFill } from "react-icons/bs"
import { BiNoEntry } from "react-icons/bi"
//

import { renderStatus } from "../utils/renderStatus"
import { renderIcon } from "../utils/renderIcon"
import { walletAddressRegex } from "../utils/constants"

const UserIcon = ({ address }) => {
  const [iconChange, setIconChange] = useState(null)
  const containerRef = useRef(null)
  const dispatch = useDispatch()
  const selectedIcon = useSelector(getUserIcon)
  const selectedColor = useSelector(getIconColor)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIconChange(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleIconClick = (icon) => {
    dispatch(setUserIcon(icon))
    setIconChange(true)
  }

  const handleIconClose = () => {
    setIconChange(null)
  }

  const handleColorChange = (color) => {
    dispatch(setIconColor(color))
  }

  return (
    <div className={Styles.userIcon}>
      <div onClick={() => handleIconClick(selectedIcon)}>
        {renderIcon(
          selectedIcon,
          selectedColor,
          jsNumberForAddress(address),
          75
        )}
        <FiEdit3 className={Styles.UserIconEdit} />
      </div>

      {iconChange && (
        <div className={Styles.modalContainer}>
          <div className={Styles.modal} ref={containerRef}>
            <div className={Styles.modalHeader}>
              <h2 className={Styles.modalTitle}>
                Choose your favourite icon and color!
              </h2>
              <span className={Styles.closeButton} onClick={handleIconClose}>
                &times;
              </span>
            </div>
            <div className={Styles.iconStyling}>
              <div className={Styles.iconOptions}>
                <div onClick={() => handleIconClick("jazzicon")}>
                  <Jazzicon
                    diameter={70}
                    seed={jsNumberForAddress(address)}
                    className={Styles.iconOption}
                  />
                </div>
                <div onClick={() => handleIconClick("fox")}>
                  <GiFoxHead
                    size={70}
                    className={Styles.iconOption}
                    color={selectedColor}
                  />
                </div>
                <div onClick={() => handleIconClick("wolf")}>
                  <FaWolfPackBattalion
                    size={70}
                    className={Styles.iconOption}
                    color={selectedColor}
                  />
                </div>
                <div onClick={() => handleIconClick("ethereum")}>
                  <FaEthereum
                    size={70}
                    className={Styles.iconOption}
                    color={selectedColor}
                  />
                </div>
                <div onClick={() => handleIconClick("bitcoin")}>
                  <FaBitcoin
                    size={70}
                    className={Styles.iconOption}
                    color={selectedColor}
                  />
                </div>
                <div onClick={() => handleIconClick("dogecoin")}>
                  <SiDogecoin
                    size={70}
                    className={Styles.iconOption}
                    color={selectedColor}
                  />
                </div>
                <div onClick={() => handleIconClick("anubis")}>
                  <GiAnubis
                    size={70}
                    className={Styles.iconOption}
                    color={selectedColor}
                  />
                </div>
                <div onClick={() => handleIconClick("spider")}>
                  <GiAngularSpider
                    size={70}
                    className={Styles.iconOption}
                    color={selectedColor}
                  />
                </div>
                <div onClick={() => handleIconClick("bear")}>
                  <GiBearFace
                    size={70}
                    className={Styles.iconOption}
                    color={selectedColor}
                  />
                </div>
                <div onClick={() => handleIconClick("brute")}>
                  <GiBrute
                    size={70}
                    className={Styles.iconOption}
                    color={selectedColor}
                  />
                </div>
                <div onClick={() => handleIconClick("dog")}>
                  <GiLabradorHead
                    size={70}
                    className={Styles.iconOption}
                    color={selectedColor}
                  />
                </div>
                <div onClick={() => handleIconClick("mountain")}>
                  <GiMountaintop
                    size={70}
                    className={Styles.iconOption}
                    color={selectedColor}
                  />
                </div>
              </div>
              <div className={Styles.iconColorOptions}>
                <div
                  onClick={() => handleColorChange("#bbbbbb")}
                  style={{ backgroundColor: "#bbbbbb" }}
                  className={Styles.colorOption}
                />
                <div
                  onClick={() => handleColorChange("#60abef")}
                  style={{ backgroundColor: "#60abef" }}
                  className={Styles.colorOption}
                />
                <div
                  onClick={() => handleColorChange("#d8d223")}
                  style={{ backgroundColor: "#d8d223" }}
                  className={Styles.colorOption}
                />
                <div
                  onClick={() => handleColorChange("#ec6ff7")}
                  style={{ backgroundColor: "#ec6ff7" }}
                  className={Styles.colorOption}
                />
                <div
                  onClick={() => handleColorChange("#CD7F32")}
                  style={{ backgroundColor: "#CD7F32" }}
                  className={Styles.colorOption}
                />
                <div
                  onClick={() => handleColorChange("#872222")}
                  style={{ backgroundColor: "#872222" }}
                  className={Styles.colorOption}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

const InputContainer = () => {
  const address = useSelector(getAddress)
  const selectedStatus = useSelector(getUserStatus)

  // wallet address functions
  const [walletAddresses, setWalletAddresses] = useState([""])

  const handleAddWalletAddress = (walletAddress) => {
    setWalletAddresses([...walletAddresses, ""])
    return (
      <div className={Styles.inputRow}>
        <p className={Styles.inputTitle}>Wallet Address:</p>
        {walletAddressInput(walletAddress, 0)}
      </div>
    )
  }

  const walletAddressInput = (walletAddress, index) => {
    return (
      <input
        placeholder="0x..."
        minLength={42}
        maxLength={42}
        required
        type="text"
        autoComplete="off"
        className={Styles.input}
        value={walletAddress}
        pattern={walletAddressRegex}
        onChange={(event) => handleWalletAddressChange(index, event)}
      />
    )
  }

  const handleDeleteWalletAddress = (index) => {
    if (walletAddresses.length === 1) {
      return // Ensure at least one wallet address always exists
    }

    const updatedWalletAddresses = [...walletAddresses]
    updatedWalletAddresses.splice(index, 1)
    setWalletAddresses(updatedWalletAddresses)
  }

  const [walletAddressErrors, setWalletAddressErrors] = useState([])

  const handleWalletAddressChange = (index, event) => {
    const updatedWalletAddresses = [...walletAddresses]
    updatedWalletAddresses[index] = event.target.value
    setWalletAddresses(updatedWalletAddresses)

    // Validate the wallet address format
    const isValidFormat = RegExp("/" + walletAddressRegex + "/").test(
      event.target.value
    )
    if (event.target.value.trim() === "") {
      // Clear the error if the input field is empty
      const updatedWalletAddressErrors = [...walletAddressErrors]
      updatedWalletAddressErrors[index] = ""
      setWalletAddressErrors(updatedWalletAddressErrors)
    } else if (isValidFormat) {
      // Clear the error if the format is valid
      const updatedWalletAddressErrors = [...walletAddressErrors]
      updatedWalletAddressErrors[index] = ""
      setWalletAddressErrors(updatedWalletAddressErrors)
    } else {
      // Display an error message for invalid format
      const updatedWalletAddressErrors = [...walletAddressErrors]
      updatedWalletAddressErrors[index] = "Invalid wallet address format"
      setWalletAddressErrors(updatedWalletAddressErrors)
    }
  }
  // wallet address functions end

  // Password functions start
  const [isPasswordExpanded, setIsPasswordExpanded] = useState(false)
  const [isCurrentPasswordEntered, setIsCurrentPasswordEntered] =
    useState(false)
  const containerRef = useRef(null)
  const [showPassword, setShowPassword] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState("")
  const [password, setPassword] = useState("")

  const togglePasswordExpanded = () => {
    setIsPasswordExpanded(!isPasswordExpanded)
  }

  // const handleCurrentPasswordChange = (event) => {
  //   const isValidCurrentPassword = validateCurrentPassword(event.target.value)
  // gan jau noderēs šitā functija
  //   setIsCurrentPasswordEntered(isValidCurrentPassword)
  // }

  const handleCurrentPasswordChange = (event) => {
    setIsCurrentPasswordEntered(event.target.value.trim() !== "")
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value)
  }

  const handleTogglePassword = () => {
    setShowPassword(!showPassword)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsPasswordExpanded(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])
  // Password functions end

  // status functions start

  const dispatch = useDispatch()

  const handleStatusClick = (status) => {
    dispatch(setUserStatus(status))
  }

  // status functions end

  return (
    <div className={Styles.inputContainer}>
      {/* E-Mail input start */}
      <div className={Styles.inputRow}>
        <p className={Styles.inputTitle}>E-mail:</p>
        <input
          type="email"
          className={Styles.input}
          required
          name="email"
          placeholder="your@email.com"
          autoComplete="off"
          min={0}
        />
      </div>
      {/* E-mail input end */}

      {/* Wallet Address start */}
      {walletAddresses.map((walletAddress, index) => (
        <div className={Styles.inputRowContainer}>
          <div className={Styles.inputRow}>
            <p className={Styles.inputTitle}>Wallet Address:</p>
            {index !== 0 ? (
              walletAddressInput(walletAddress, index)
            ) : (
              <p className={Styles.address}>{address}</p>
            )}
            {index > 0 && (
              <button
                onClick={() => handleDeleteWalletAddress(index)}
                className={Styles.handleDeleteWalletAddress}
              >
                <AiFillMinusCircle
                  className={Styles.handleDeleteWalletAddressIcon}
                />
              </button>
            )}
          </div>
          {walletAddressErrors[index] && (
            <div
              style={{
                position: "absolute",
                margin: "-20px 0px 0px 615px",
                backgroundColor: "#252525",
                border: "2px solid #353535",
                borderRadius: "20px",
                padding: "5px",
                zIndex: "1",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  marginBottom: "0px",
                }}
              >
                <AiOutlineWarning
                  style={{
                    fontSize: "25px",
                    color: "#bc4e4e",
                    marginRight: "15px",
                  }}
                />
                <p
                  style={{
                    color: "#bbbbbb",
                    fontSize: "20px",
                    cursor: "default",
                  }}
                >
                  {walletAddressErrors[index]}
                </p>
              </div>
              <p
                style={{
                  color: "#ccc",
                  marginTop: "-10px",
                  fontSize: "15px",
                  cursor: "default",
                }}
              >
                Make sure you entered your ETH address correctly.
              </p>
            </div>
          )}
        </div>
      ))}
      {walletAddresses.length < 2 && (
        <button
          onClick={handleAddWalletAddress}
          className={Styles.handleAddWalletAddress}
        >
          <p className={Styles.handleAddWalletAddressTitle}>
            Add a new wallet address
          </p>
          <AiFillPlusCircle className={Styles.handleAddWalletAddressIcon} />
        </button>
      )}
      {/* Wallet Address end */}

      {/* Password change start */}
      <div
        ref={containerRef}
        className={`${Styles.passwordContainer} ${
          isPasswordExpanded ? Styles.passwordContainerExpanded : ""
        }`}
      >
        <button
          onClick={togglePasswordExpanded}
          className={`${Styles.passwordButton} ${
            isPasswordExpanded ? Styles.passwordButtonExpanded : ""
          }`}
        >
          {isPasswordExpanded ? (
            <p className={Styles.passwordButtonTitle}>Changing Password</p>
          ) : (
            <p className={Styles.passwordButtonTitle}>Change Password</p>
          )}
        </button>
        {isPasswordExpanded && (
          <div>
            <div className={Styles.inputRow}>
              <p className={Styles.inputTitle}>Current Password:</p>
              <input
                type={showPassword ? "text" : "password"}
                className={Styles.input}
                required
                name="email"
                placeholder="Enter Current Password"
                autoComplete="off"
                minLength={8}
                maxLength={100}
                onChange={handleCurrentPasswordChange}
              />
              <button
                type="button"
                className={Styles.togglePasswordButton}
                onClick={handleTogglePassword}
              >
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </button>
            </div>
            {isCurrentPasswordEntered && (
              <div>
                <div className={Styles.inputRow}>
                  <p className={Styles.inputTitle}>New Password:</p>
                  <input
                    type={showPassword ? "text" : "password"}
                    className={Styles.input}
                    required
                    name="newPassword"
                    placeholder="Enter New Password"
                    autoComplete="off"
                    minLength={8}
                    maxLength={100}
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                <div className={Styles.inputRow}>
                  <p className={Styles.inputTitle}>Confirm New Password:</p>
                  <input
                    type={showPassword ? "text" : "password"}
                    className={Styles.input}
                    required
                    name="confirmNewPassword"
                    placeholder="Confirm New Password"
                    autoComplete="off"
                    minLength={8}
                    maxLength={100}
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                  />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      {/* password change end */}

      {/* Status select start */}
      <div className={Styles.statusContainer}>
        <p className={Styles.statusTitle}>Select your status</p>
        <div className={Styles.statusOptions}>
          <button
            // className={Styles.statusButton}
            className={`${Styles.statusButton} ${
              selectedStatus === "Investor" ? Styles.selectedStatusButton : ""
            }`}
            onClick={() => handleStatusClick("Investor")}
          >
            <RiMoneyDollarCircleFill
              className={`${Styles.statusIconInvestor} ${
                selectedStatus === "Investor" ? Styles.selectedIconInvestor : ""
              }`}
            />
            <p className={Styles.statusIconTitle}>Investor</p>
          </button>
          <button
            // className={Styles.statusButton}
            className={`${Styles.statusButton} ${
              selectedStatus === "Creator" ? Styles.selectedStatusButton : ""
            }`}
            onClick={() => handleStatusClick("Creator")}
          >
            <BsEaselFill
              className={`${Styles.statusIconCreator} ${
                selectedStatus === "Creator" ? Styles.selectedIconCreator : ""
              }`}
            />
            <p className={Styles.statusIconTitle}>Creator</p>
          </button>
          <button
            // className={Styles.statusButton}
            className={`${Styles.statusButton} ${
              selectedStatus === "None" ? Styles.selectedStatusButton : ""
            }`}
            onClick={() => handleStatusClick("None")}
          >
            <BiNoEntry
              className={`${Styles.statusIconNone} ${
                selectedStatus === "None" ? Styles.selectedIconNone : ""
              }`}
            />
            <p className={Styles.statusIconTitle}>None</p>
          </button>
        </div>
      </div>
      {/* Status select end */}
    </div>
  )
}

const Kyc = () => {
  const [isKycChecked, setIsKycChecked] = useState(false)
  const handleCheckboxChange = (e) => {
    setIsKycChecked(e.target.checked)
  }

  return (
    <div className={Styles.kyc}>
      <p className={Styles.statusTitle}>KYC</p>
      <label className={Styles.kycCheckboxContainer}>
        <input
          type="checkbox"
          name="checkbox"
          className={Styles.kycCheckboxContainerInput}
          checked={isKycChecked}
          onChange={handleCheckboxChange}
        />
        <svg
          viewBox="0 0 64 64"
          height="2em"
          width="2em"
          className={Styles.kycCheckboxContainerSvg}
        >
          <path
            d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
            pathLength="575.0541381835938"
            className={Styles.kycCheckboxContainerPath}
          />
        </svg>
        <label htmlFor="checkbox" className={Styles.kycCheckboxContainerTitle}>
          - by clicking this box I agree to be KYC verified
        </label>
      </label>
      {/* Kyc image drop */}
      {isKycChecked && (
        <div className={Styles.form}>
          <span className={Styles.formTitle}>Upload your documents</span>
          <p className={Styles.formParagraph}>
            1.) Verification credentials - include ID card or passport.
          </p>
          <p className={Styles.formParagraph}>
            2.) For proof of address, utility bill or bank statement with
            address on it.
          </p>
          <label htmlFor="fileInput" className={Styles.dropContainer}>
            <span className={Styles.dropTitle}>Drop files here</span>
            or
            <input
              type="file"
              accept="image/*"
              required
              multiple
              id={Styles.fileInput}
            />
          </label>
        </div>
      )}
    </div>
  )
}

export default function ProfileEdit() {
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

      {/* input container and kyc */}
      <div className={Styles.rightContainer}>
        <InputContainer />
        {statusIconId === "unverified" && <Kyc />}
      </div>
      {/*  */}
    </div>
  )
}
