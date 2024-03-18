import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { getIsConnected, getNetwork } from "../store/slices/userSlice"
import Styles from "../styles/Submit.module.css"
import { AiOutlineInfoCircle } from "react-icons/ai"

function SubmitButton() {
  const [isExpanded, setIsExpanded] = useState(false)
  const isConnected = useSelector(getIsConnected)
  const network = useSelector(getNetwork)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const shouldExpand = urlParams.get("expand")
    setIsExpanded(shouldExpand === "true")
  }, [])

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded)
    setIsLoading(false)
  }

  const [isKycChecked, setIsKycChecked] = useState(false)
  const handleCheckboxChange = (e) => {
    setIsKycChecked(e.target.checked)
  }

  const [isLoading, setIsLoading] = useState(false)

  const [selectedStandard, setSelectedStandard] = useState(null)

  const handleStandardChange = (standard) => {
    setSelectedStandard(standard)
  }

  return (
    <>
      {isConnected && network && network.name !== "Sepolia" && (
        <div className={Styles.container}>
          <button onClick={handleButtonClick} className={Styles.submitButton}>
            {isExpanded
              ? "Cancel"
              : "We are open for public beta launch. Submit your NFT project!"}
          </button>
          {isExpanded && (
            <form
              className={Styles.formContainer}
              id="submitProject"
              onSubmit={(e) => {
                e.preventDefault()
                setIsLoading(true)
              }}
            >
              <div className={Styles.formDescription}>
                <p className={Styles.titles}>Thank you for joining us,</p>
                <p className={Styles.titles} style={{ marginTop: -10 }}>
                  fill out this form to start your new journey!
                </p>
                <a
                  href="https://rok-finance-dev.gitbook.io/whitepaper/"
                  className={Styles.whitepaperLink}
                  target="_blank"
                >
                  Click me for a more in-depth guide!
                </a>
              </div>
              {/* project name */}
              <div className={Styles.nameContainer}>
                <p className={Styles.titles}>Project name:</p>
                <input
                  className={Styles.nameInput}
                  placeholder="Project name..."
                  required
                  autoComplete="off"
                />
              </div>
              {/*  */}

              {/* drop image */}
              <div className={Styles.form}>
                <span className={Styles.formTitle}>
                  Upload your project images
                </span>
                <p className={Styles.formParagraph}>
                  We suggest uploading 1-3 images.
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
              {/*  */}

              {/* erc token type */}
              <div className={Styles.emailContainer}>
                <p className={Styles.titles}>
                  Which Token Standard does your collection follow?
                </p>
                <p className={Styles.descriptions}>
                  We only accept the following standards:
                </p>
                <div className={Styles.standardContainer}>
                  <label className={Styles.standardTypeContainer}>
                    <input
                      type="checkbox"
                      name="erc-1155"
                      className={Styles.standardContainerInput}
                      checked={selectedStandard === "erc-721"}
                      onChange={() => handleStandardChange("erc-721")}
                    />
                    <svg
                      viewBox="0 0 64 64"
                      height="2em"
                      width="2em"
                      className={Styles.standardContainerSvg}
                    >
                      <path
                        d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                        pathLength="575.0541381835938"
                        className={Styles.standardContainerPath}
                      />
                    </svg>
                    <label
                      htmlFor="erc-721"
                      className={Styles.standardContainerTitle}
                    >
                      - ERC-721
                    </label>
                  </label>
                  <label className={Styles.standardTypeContainer}>
                    <input
                      type="checkbox"
                      name="erc-1155"
                      className={Styles.standardContainerInput}
                      checked={selectedStandard === "erc-1155"}
                      onChange={() => handleStandardChange("erc-1155")}
                    />
                    <svg
                      viewBox="0 0 64 64"
                      height="2em"
                      width="2em"
                      className={Styles.standardContainerSvg}
                    >
                      <path
                        d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                        pathLength="575.0541381835938"
                        className={Styles.standardContainerPath}
                      />
                    </svg>
                    <label
                      htmlFor="erc-1155"
                      className={Styles.standardContainerTitle}
                    >
                      - ERC-1155
                    </label>
                  </label>
                  <label className={Styles.standardTypeContainer}>
                    <input
                      type="checkbox"
                      name="notMinted"
                      className={Styles.standardContainerInput}
                      checked={selectedStandard === "notMinted"}
                      onChange={() => handleStandardChange("notMinted")}
                    />
                    <svg
                      viewBox="0 0 64 64"
                      height="2em"
                      width="2em"
                      className={Styles.standardContainerSvg}
                    >
                      <path
                        d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                        pathLength="575.0541381835938"
                        className={Styles.standardContainerPath}
                      />
                    </svg>
                    <label
                      htmlFor="notMinted"
                      className={Styles.standardContainerTitle}
                    >
                      - My collection isnt minted yet
                    </label>
                  </label>
                </div>
              </div>
              {/*  */}

              {/* ETH Address */}
              <div className={Styles.addressContainer}>
                <p className={Styles.titles}>ETH Addresses:</p>
                <p className={Styles.descriptions}>
                  ETH address where you want to receive the total pledged amount
                </p>
                <p className={Styles.descriptions} style={{ marginTop: -10 }}>
                  and from which the NFT's will be sent to investors:
                </p>
                <input
                  className={Styles.addressInput}
                  placeholder="0x..."
                  minLength={42}
                  maxLength={42}
                  required
                  type="text"
                  autoComplete="off"
                />
                <p
                  className={Styles.infoDescriptions}
                  style={{ marginTop: 10, marginBottom: 0 }}
                >
                  <AiOutlineInfoCircle />
                  This cannot be changed later
                </p>
              </div>
              {/*  */}

              {/* description */}
              <div className={Styles.descriptionContainer}>
                <p className={Styles.titles}>Description:</p>
                <p className={Styles.descriptions} style={{ marginTop: 30 }}>
                  Make sure to mention the utility of your project, if there are
                  any.
                </p>
                <textarea
                  className={Styles.descriptionInput}
                  placeholder="Write a brief description about your project (max 150 characters)..."
                  minLength={50}
                  maxLength={150}
                  spellCheck
                  required
                  autoComplete="off"
                />
              </div>
              {/*  */}

              {/* price */}
              <div className={Styles.priceContainer}>
                <p className={Styles.titles}>Price in ETH:</p>
                <input
                  className={Styles.priceInput}
                  required
                  name="balance"
                  placeholder="Set the pledge price..."
                  autoComplete="off"
                  min={0}
                  // pattern="[0-9]"
                />
              </div>
              {/*  */}

              {/* goal */}
              <div className={Styles.goalContainer}>
                <p className={Styles.titles}>Pledger goal:</p>
                <input
                  type="text"
                  className={Styles.priceInput}
                  required
                  name="goal"
                  min={50}
                  placeholder="Choose atleast 50..."
                  autoComplete="off"
                  // pattern="[0-9]+"
                />
              </div>
              {/*  */}

              {/* all links */}
              <div className={Styles.linksContainer}>
                <p className={Styles.titles}>Links:</p>
                <p className={Styles.descriptions}>
                  All are not required, just good to have.
                </p>
                {/* website */}
                <div className={Styles.rowedContainer}>
                  <div className={Styles.websiteContainer}>
                    <p className={Styles.titles}>Website:</p>
                    <input
                      type="url"
                      name="myInput"
                      pattern="https://*"
                      className={Styles.linkInput}
                      placeholder="https://..."
                      autoComplete="off"
                    />
                  </div>
                  {/*  */}
                  {/* Opensea */}
                  <div className={Styles.websiteContainer}>
                    <p className={Styles.titles}>OpenSea:</p>
                    <input
                      type="url"
                      name="myInput"
                      pattern="https://*"
                      className={Styles.linkInput}
                      placeholder="https://..."
                      autoComplete="off"
                    />
                  </div>
                </div>
                {/*  */}
                <div className={Styles.rowedContainer}>
                  {/* twitter */}
                  <div className={Styles.websiteContainer}>
                    <p className={Styles.titles}>Twitter:</p>
                    <input
                      type="url"
                      name="myInput"
                      pattern="https://*"
                      className={Styles.linkInput}
                      placeholder="https://..."
                      autoComplete="off"
                    />
                  </div>
                  {/*  */}
                  {/* Discord */}
                  <div className={Styles.websiteContainer}>
                    <p className={Styles.titles}>Discord:</p>
                    <input
                      type="url"
                      name="myInput"
                      pattern="https://*"
                      className={Styles.linkInput}
                      placeholder="https://..."
                      autoComplete="off"
                    />
                  </div>
                </div>
                {/*  */}
              </div>
              {/*  */}

              {/* KYC */}
              <div className={Styles.kyc}>
                <p className={Styles.titles}>KYC:</p>
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
                  <label
                    htmlFor="checkbox"
                    className={Styles.kycCheckboxContainerTitle}
                  >
                    - by clicking this box I agree to be KYC verified
                  </label>
                </label>
                <p className={Styles.infoDescriptions}>
                  <AiOutlineInfoCircle />
                  If you choose not to be KYC verified, then ignore this
                  section.
                </p>
                {/* Kyc image drop */}
                {isKycChecked && (
                  <div className={Styles.form}>
                    <span className={Styles.formTitle}>
                      Upload your documents
                    </span>
                    <p className={Styles.formParagraph}>
                      1.) Verification credentials - include ID card or
                      passport.
                    </p>
                    <p className={Styles.formParagraph}>
                      2.) For proof of address, utility bill or bank statement
                      with address on it.
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
              {/*  */}

              {/* referral code */}
              <div className={Styles.nameContainer}>
                <p className={Styles.titles}>Referral code:</p>
                <input
                  className={Styles.nameInput}
                  placeholder="Referral code..."
                  autoComplete="off"
                />
              </div>
              {/*  */}

              {/* E-mail */}
              <div className={Styles.emailContainer}>
                <p className={Styles.titles}>
                  Please, provide us with your e-mail in case we need to contact
                  you.
                </p>
                <div className={Styles.priceContainer}>
                  <p className={Styles.titles}>E-mail:</p>
                  <input
                    type="email"
                    className={Styles.priceInput}
                    required
                    name="email"
                    placeholder="your@email.com"
                    autoComplete="off"
                    min={0}
                  />
                </div>
              </div>
              {/*  */}

              <div className={Styles.buttonContainer}>
                <button type="submit" className={Styles.submitProject}>
                  Submit Project
                </button>
              </div>

              {isLoading && (
                // <div className={Styles.loadingScreen}>
                <div className={`${Styles.loadingScreen} ${Styles.fullScreen}`}>
                  <div className={Styles.loader}>
                    <div className={Styles.circle} />
                    <div className={Styles.circle} />
                    <div className={Styles.circle} />
                    <div className={Styles.circle} />
                  </div>
                  <p className={Styles.loadingTitle}>
                    Please confirm your e-mail address...
                  </p>
                </div>
              )}
            </form>
          )}
        </div>
      )}
    </>
  )
}

export default SubmitButton
