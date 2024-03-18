import { RiMoneyDollarCircleFill } from "react-icons/ri"
import { BsEaselFill } from "react-icons/bs"
import { BiNoEntry } from "react-icons/bi"

import Styles from "../styles/Profile.module.css"

export const renderStatus = (selectedStatus) => {
  if (selectedStatus === "Investor") {
    return (
      <div className={Styles.statusRenderContainer}>
        <p className={Styles.statusRenderTitle}>Investor</p>
        <RiMoneyDollarCircleFill color="#163c5d" />
      </div>
    )
  } else if (selectedStatus === "Creator") {
    return (
      <div className={Styles.statusRenderContainer}>
        <p className={Styles.statusRenderTitle}>Creator</p>
        <BsEaselFill color="#ad49c1" />
      </div>
    )
  } else if (selectedStatus === "None") {
    return (
      <div className={Styles.statusRenderContainer}>
        <p className={Styles.statusRenderTitle}>None</p>
        <BiNoEntry color="#a63d3d" />
      </div>
    )
  } else {
    return (
      <div className={Styles.statusRenderContainer}>
        <p className={Styles.statusRenderTitle}>None</p>
        <BiNoEntry color="#a63d3d" />
      </div>
    )
  }
}
