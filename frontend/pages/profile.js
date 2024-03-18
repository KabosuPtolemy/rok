import React, { useState } from "react"
import { getIsConnected } from "../store/slices/userSlice"
import { useSelector } from "react-redux"

import ProfileEdit from "../components/ProfileEdit"
import ProfileView from "../components/ProfileView"
import Footer from "../components/Footer"

import Styles from "../styles/Profile.module.css"

import { AiOutlineInfoCircle, AiFillWarning, AiFillSave } from "react-icons/ai"
import { FiEdit } from "react-icons/fi"

function UserConnected() {
  const [isEditable, setIsEditable] = useState(false)

  const toggleEditable = () => {
    setIsEditable(!isEditable)
  }

  return (
    <div>
      <div className={Styles.editParentContainer}>
        <button onClick={toggleEditable} className={Styles.editButton}>
          {isEditable ? (
            <div className={Styles.editContainer}>
              <p className={Styles.editTitle}>Save Changes</p>
              <AiFillSave className={Styles.editIcon} />
            </div>
          ) : (
            <div className={Styles.editContainer}>
              <p className={Styles.editTitle}>Edit Profile</p>
              <FiEdit className={Styles.editIcon} />
            </div>
          )}
        </button>
      </div>
      {isEditable ? <ProfileEdit /> : <ProfileView />}
    </div>
  )
}

function UserNotConnected() {
  return (
    <div className={Styles.notContainer}>
      <div className={Styles.warningContainer}>
        <AiFillWarning className={Styles.notIcon} />
        <p className={Styles.notTitle}>you are not connected</p>
      </div>
      <div className={Styles.notSubContainer}>
        <AiOutlineInfoCircle className={Styles.notSubicon} />
        <p className={Styles.notSubtitle}>
          To edit or view your profile you need to connect!
        </p>
      </div>
    </div>
  )
}

export default function Profile() {
  const isConnected = useSelector(getIsConnected)

  return (
    <>
      <div className={Styles.container}>
        {isConnected ? <UserConnected /> : <UserNotConnected />}
      </div>
      <Footer />
    </>
  )
}
