import { useEffect, useState } from "react"

import Styles from "../styles/NftProjectCard.module.css"
// https://react-icons.github.io/react-icons/icons?name=bs

import { AiFillCheckSquare, AiFillCloseSquare } from "react-icons/ai"

import { HiChevronDoubleRight, HiChevronDoubleLeft } from "react-icons/hi"
import { IconContext } from "react-icons"

import { pledge, subscribe as subscribe } from "../utils/contractOperations"

import { getSigner, getAddress } from "../store/slices/userSlice"
import { useSelector } from "react-redux"
import { FirebaseService } from "../utils/FirebaseService"

// Why move it to a different file?
// - The code becomes easier to maintain
// - Smaller code files

// Most likely we are gonna need to pass in a data object with all the data
export default function NftProjectCard(props) {
  const [project, setProject] = useState(props.nftProject)
  const [imgIndex, setImgIndex] = useState(0)
  const imgLen = project.imgUrls.length

  const signer = useSelector(getSigner)
  const address = useSelector(getAddress)

  const firebase = new FirebaseService()

  useEffect(() => {
    firebase.initApp()
  })

  function formatDate() {
    if (project.endDate == undefined) {
      const dateNow = new Date()
      return (
        dateNow.getDate() +
        "." +
        dateNow.getMonth() +
        "." +
        dateNow.getFullYear()
      )
    } else {
      let month =
        project.endDate.toDate().getMonth() + 1 < 10
          ? "0" + (project.endDate.toDate().getMonth() + 1)
          : project.endDate.toDate().getMonth() + 1

      let date =
        project.endDate.toDate().getDate() < 10
          ? "0" + project.endDate.toDate().getDate()
          : project.endDate.toDate().getDate()

      return date + "." + month + "." + project.endDate.toDate().getFullYear()
    }
  }

  function formatFP() {
    if (
      project.floorPrice?.amount == undefined &&
      project.floorPrice?.currency == undefined
    ) {
      // TODO: Add default value handler
      return "0.001 ETH"
    } else {
      return (
        project.floorPrice?.amount.toString() +
        " " +
        project.floorPrice?.currency
      )
    }
  }

  // check for a list of images and if the list is not empty
  function imageDisplayComponent() {
    if (project.imgUrls && imgLen > 0) {
      let selectedImage = project.imgUrls[imgIndex]
      return (
        <div className={Styles.imagecontainer}>
          {imgIndex != 0 ? (
            <div
              className={Styles.arrow_left}
              onClick={() => setImgIndex(imgIndex - 1)}
            >
              <div className={Styles.movement_icon_left}>
                <IconContext.Provider value={{ color: "grey", size: "20px" }}>
                  <HiChevronDoubleLeft className={Styles.movement_icon_left} />
                </IconContext.Provider>
              </div>
            </div>
          ) : (
            <div style={{ width: "100%" }}></div>
          )}
          <img
            src={selectedImage}
            alt={"nft" + imgIndex}
            className={Styles.image}
          />
          {imgIndex < imgLen - 1 ? (
            <div
              className={Styles.arrow_right}
              onClick={() => setImgIndex(imgIndex + 1)}
            >
              <div className={Styles.movement_icon_right}>
                <IconContext.Provider value={{ color: "grey", size: "20px" }}>
                  <HiChevronDoubleRight className={Styles.movement_icon_left} />
                </IconContext.Provider>
              </div>
            </div>
          ) : (
            <div style={{ width: "100%" }}></div>
          )}
        </div>
      )
    } else {
      // if list is empty display default image
      const defaultImage = "/rok2.svg"
      return <img src={defaultImage} alt="nft image" className={Styles.image} />
    }
  }

  const socialsContainer = () => {
    const socials = project?.socials
    if (socials == null) {
      return <div>No socials ...</div>
    } else {
      const count = Object.keys(socials).length
      if (count > 0) {
        const components = []
        for (let i = 0; i < count; i++) {
          const key = Object.keys(socials)[i]
          const link = socials[key]
          components.push(
            <a href={link} key={i.toString() + "_key"} target="_blank">
              <img
                src={getImage(key)}
                alt="social links"
                className={Styles.linkimg}
              />
            </a>
          )
        }
        return components
      } else {
        // No socials
        return <></>
      }
    }
  }

  function getImage(key) {
    switch (key) {
      case "website":
        return "./Icons/website.svg"
      case "twitter":
        return "./Icons/twitter.svg"
      case "discord":
        return "./Icons/discord.svg"
      case "opensea":
        return "./Icons/opensea.svg"
    }
  }

  const openContract = () => {
    if (project.contract) open(project.contract)
  }

  function subscribeToProject(isAdd) {
    subscribe(firebase, project.uid, address, isAdd)
    let arr = []
    if (isAdd) {
      arr = [...project.subscribers, address]
    } else {
      arr = project.subscribers.filter((value) => value != address)
    }
    setProject({ ...project, subscribers: arr })
  }

  // const subscribeComponent = () => {
  //   if (project.subscribers) {
  //     return project.subscribers.includes(address) ? (
  //       <button
  //         className={Styles.pledge}
  //         onClick={() => subscribeToProject(false)}
  //       >
  //         Un-Subscribe
  //       </button>
  //     ) : (
  //       <button
  //         className={Styles.pledge}
  //         onClick={() =>
  //           project.subscribers.length < project.goal
  //             ? subscribeToProject(true)
  //             : pledge(
  //                 signer,
  //                 project.listingId.address,
  //                 project.listingId.abi,
  //                 project.listingId.floorPrice
  //               )
  //         }
  //       >
  //         {project.subscribers.length < project.goal ? "Subscribe" : "Pledge"}
  //       </button>
  //     )
  //   }
  // }

  // Ja lietotājs ir pledgojis tad lai bloķē pogu un rāda "Pledged"
  // chatgpt piedāvā šito:
  const subscribeComponent = () => {
    if (project.subscribers) {
      if (project.subscribers.includes(address)) {
        // If user has already subscribed
        return (
          <button
            className={Styles.pledge}
            onClick={() => subscribeToProject(false)}
          >
            Un-Subscribe
          </button>
        )
      } else if (project.subscribers.length >= project.goal) {
        // If project is already fully subscribed, show "Pledged" button
        return (
          <button
            className={Styles.pledge}
            onClick={() =>
              pledge(
                signer,
                project.listingId.address,
                project.listingId.abi,
                project.listingId.floorPrice
              )
            }
          >
            Pledged
          </button>
        )
      } else {
        // If user has not subscribed and project is not fully subscribed, show "Subscribe" button
        return (
          <button
            className={Styles.pledge}
            onClick={() => subscribeToProject(true)}
          >
            Subscribe
          </button>
        )
      }
    }
  }

  const progressBar = () => {
    if (project && project.subscribers) {
      const remainingGoal = project.goal - project.subscribers.length
      const value = Math.floor(
        (project.subscribers.length / project.goal) * 100
      )
      return (
        <div className={Styles.progressBar}>
          {value != 0 && (
            <div
              className={Styles.progressBarValue}
              style={{
                width: value.toString() + "%",
              }}
            >
              <div style={{ color: "#252525" }}>
                {value > 20 && value.toString() + " %"}
              </div>
            </div>
          )}
          {value <= 20 && (
            <div style={{ marginLeft: "5px" }}>{value.toString() + " %"}</div>
          )}
          <div className={Styles.remainingGoal}>Remaining: {remainingGoal}</div>
        </div>
      )
    }
  }

  return (
    <div className={Styles.project}>
      <center>
        <div className={Styles.projecttitle}>{project.name}</div>
      </center>
      {imageDisplayComponent()}
      <div className={Styles.projectdetails}>
        <div className={Styles.description}>{project.description}</div>
        <center>
          <div>{progressBar()}</div>
        </center>

        <center>{address && subscribeComponent()}</center>
        <center>
          <div className={Styles.marketing}>
            <p className={Styles.marketingtext}>Price: {formatFP()}</p>
            <p className={Styles.marketingtext}>End Date: {formatDate()}</p>
          </div>
        </center>
        <hr className={Styles.divider}></hr>

        <center>
          <div
            className={Styles.specsContainer}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className={Styles.kyc}>
              <div className={Styles.kycLabel}>KYC:</div>
              <div className={Styles.kycIcon}>
                {project.kyc != null ? (
                  project.kyc ? (
                    <AiFillCheckSquare className={Styles.kycCheck} />
                  ) : (
                    <AiFillCloseSquare className={Styles.kycXmark} />
                  )
                ) : (
                  "supplier"
                )}
              </div>
            </div>
            {project.contract && (
              <div className={Styles.contract}>
                <div></div>
                <a
                  className={Styles.contractValue}
                  onClick={openContract}
                  target="_blank"
                >
                  Contract
                </a>
              </div>
            )}
          </div>
        </center>

        <hr className={Styles.divider}></hr>

        <div className={Styles.socialscontainer}>{socialsContainer()}</div>
      </div>
    </div>
  )
}
