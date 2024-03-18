import { useState, useRef, useEffect } from "react"
import Styles from "../styles/Company.module.css"
import Footer from "../components/Footer.js"
import Head from "next/head"
import useMediaQuery from "../utils/useMediaQuery"
import {
  AiOutlineSound,
  AiOutlineSafety,
  AiOutlineCopyright,
  AiOutlineTeam,
  AiOutlineExperiment,
} from "react-icons/ai"
import { FaLinkedin, FaGithub, FaTwitter, FaDiscord } from "react-icons/fa"

const head = () => {
  return (
    <Head>
      <title>ROK Finance | Company</title>
      <meta
        name="description"
        content="The First NFT CrowdFunding Platform on ETH chain."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="google-site-verification"
        content="mzmbOWuK_aCn511x7jZh5ARjBwzAUQh9j2XhBG8h3p0"
      />
      <link rel="icon" href="/rok2.svg" />
      <link rel="apple-touch-icon" href="/rok2.svg" />
    </Head>
  )
}

function RoadmapMobile() {
  const [selectedQuestion, setSelectedQuestion] = useState(null)
  const faqRef = useRef(null)

  const faqData = [
    {
      question: "1. Submit interface",
      answer:
        "The new submit interface enables users to upload their NFT projects directly to the site, eliminating the need for Google forms. This feature streamlines the submission process, making it faster and more accessible for NFT creators.",
    },
    {
      question: "2. Token creation",
      answer:
        "Soon we are launching our own ROK token - The native cryptocurrency of ROK Finance. It will be used for project submission and subscription, whilst providing us with a safety mechanism.",
    },
    {
      question: "3. Token public pre-sale",
      answer:
        "ROK token pre-sale is a limited-time opportunity for early adopters to purchase ROK tokens. Pre-sale duration will be 3 months.",
    },
    {
      question: "4. ROK Token on liquidity pools",
      answer:
        "This will allow users to trade ROK with other cryptocurrencies and provide liquidity. This enhances the tokens accessibility and usability whilst increasing it's value and exposure to the broader cryptocurrency market.",
    },
  ]

  const handleQuestionClick = (index) => {
    if (selectedQuestion === index) {
      // If the selected question is clicked again, deselect it
      setSelectedQuestion(null)
    } else {
      // Otherwise, select the clicked question
      setSelectedQuestion(index)
    }
  }

  const handleClickOutside = (event) => {
    if (faqRef.current && !faqRef.current.contains(event.target)) {
      // If the clicked element is outside the question box, deselect the current question
      setSelectedQuestion(null)
    }
  }

  useEffect(() => {
    // Attach the click event listener to the document object
    document.addEventListener("click", handleClickOutside)
    return () => {
      // Remove the click event listener when the component is unmounted
      document.removeEventListener("click", handleClickOutside)
    }
  }, [])

  return (
    <div className={Styles.faq}>
      <h2 className={Styles.title}>Roadmap</h2>
      <ul ref={faqRef} className={Styles.questions}>
        {faqData.map((item, index) => (
          <li key={index} className={Styles.question}>
            <button
              onClick={() => handleQuestionClick(index)}
              className={Styles.questionTitle}
            >
              {item.question}
            </button>
            {selectedQuestion === index && (
              <p className={Styles.questionAnswer}>{item.answer}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

const Roadmap = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)")

  if (isDesktop) {
    return (
      <div className={Styles.roadmap}>
        <h2 className={Styles.title}>Roadmap</h2>
        <center>
          <img
            className={Styles.roadmapImg}
            src="./roadmap.png"
            alt="ROK Finance roadmap"
          />
          <a
            target="_blank"
            className={Styles.roadmapLink}
            href="https://rok-finance-dev.gitbook.io/whitepaper/roadmap"
          >
            Read More here!
          </a>
        </center>
      </div>
    )
  } else {
    return (
      <div>
        <RoadmapMobile />
        <center>
          <a
            target="_blank"
            className={Styles.roadmapLink}
            href="https://rok-finance-dev.gitbook.io/whitepaper/roadmap"
          >
            Read More here!
          </a>
        </center>
      </div>
    )
  }
}

export default function Company() {
  return (
    <div className={Styles.container}>
      {head()}
      <div className={Styles.company}>
        <div className={Styles.main}>
          <div className={Styles.mainContainer}>
            <h2 className={Styles.subheading}>
              - We are a platform that allows creators to raise funds for their
              NFT project.
            </h2>
            <h2 className={Styles.subheading}>
              - Concept started in summer of 2022.
            </h2>
            <div className={Styles.mediaFollowers}>
              <a
                className={Styles.mediaFollowersTitle}
                href="https://discord.gg/WPcuXpSvpX"
                target="_blank"
              >
                <FaDiscord className={Styles.mediaFollowersImg} />
                members: 190+
              </a>
              <a
                className={Styles.mediaFollowersTitle}
                href="https://twitter.com/rokfinance"
                target="_blank"
              >
                <FaTwitter className={Styles.mediaFollowersImg} />
                followers: 1100+
              </a>
            </div>
          </div>
        </div>
        <div className={Styles.values}>
          <h2 className={Styles.title}>Our Values</h2>
          <div className={Styles.valuesContainer}>
            <div className={Styles.value} id="transparency">
              <a className={Styles.valueTitle}>Transparency</a>
              <div className={Styles.valueDesc}>
                <AiOutlineSound className={Styles.valueIcon} />
                <p>
                  By using the blockchain technology, we can provide a level of
                  accountability and traceability that wasn’t possible
                  previously, allowing us to build trust and confidence.
                </p>
              </div>
            </div>
            <div className={Styles.value} id="innovation">
              <a className={Styles.valueTitle}>Innovation</a>
              <div className={Styles.valueDesc}>
                <AiOutlineExperiment className={Styles.valueIcon} />
                <p>
                  Due to the over-saturation in the NFT community, truly
                  innovative projects have a hard time standing out and we are
                  here to help.
                </p>
              </div>
            </div>
            <div className={Styles.value} id="community">
              <a className={Styles.valueTitle}>Community</a>
              <div className={Styles.valueDesc}>
                <AiOutlineTeam className={Styles.valueIcon} />
                <p>
                  By participation individuals can become more involved in the
                  development and promotion of the project, which can foster a
                  sense of community and shared purpose.
                </p>
              </div>
            </div>
            <div className={Styles.value} id="ownership">
              <a className={Styles.valueTitle}>Ownership</a>
              <div className={Styles.valueDesc}>
                <AiOutlineCopyright className={Styles.valueIcon} />
                <p>
                  Crowdfunding offers investors the opportunity to own a piece
                  of the project. This gives a sense of ownership and pride in
                  their investment, as well as the potential for financial
                  return.
                </p>
              </div>
            </div>
            <div className={Styles.value} id="security">
              <a className={Styles.valueTitle}>Security</a>
              <div className={Styles.valueDesc}>
                <AiOutlineSafety className={Styles.valueIcon} />
                <p>
                  NFT's provide a secure way to track and verify ownership. This
                  ensures that contributors are getting the rewards or benefits
                  they are promised and that the campaign is being run
                  transparently and fairly.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.team}>
          <h2 className={Styles.title}>The Team</h2>
          <div className={Styles.teamCards}>
            <div className={Styles.card}>
              <div className={Styles.cardImage}>
                <img
                  src="../team_images/Dustin.png"
                  className={Styles.cardImage}
                  alt="Dustin's profile picture"
                />
              </div>
              <div className={Styles.cardDescription}>
                <p className={Styles.cardDescriptionName}>
                  Dustin
                  <a
                    href="https://www.twitter.com/DustinWalker67"
                    target="_blank"
                  >
                    <img
                      src="./icons/twitter.svg"
                      alt="Dustin's twitter account"
                      className={Styles.cardDescriptionSocials}
                    />
                  </a>
                </p>
                <p className={Styles.cardDescriptionJob}>Co-founder</p>
              </div>
            </div>
            <div className={Styles.card}>
              <div className={Styles.cardImage}>
                <img
                  src="../team_images/Myron.jpg"
                  className={Styles.cardImage}
                  alt="Myron's profile picture"
                />
              </div>
              <div className={Styles.cardDescription}>
                <p className={Styles.cardDescriptionName}>
                  Myron
                  <a href="https://www.twitter.com/myronvena" target="_blank">
                    <img
                      src="./Icons/twitter.svg"
                      alt="Myron's twitter account"
                      className={Styles.cardDescriptionSocials}
                    />
                  </a>
                </p>
                <p className={Styles.cardDescriptionJob}>co-founder</p>
              </div>
            </div>
            <div className={Styles.card}>
              <div className={Styles.cardImage}>
                <img
                  src="../team_images/marchel0925.png"
                  className={Styles.cardImage}
                  alt="Marchel0925's profile picture"
                />
              </div>
              <div className={Styles.cardDescription}>
                <div
                  className={Styles.cardDescriptionName}
                  style={{ marginTop: "10%" }}
                >
                  Marchel0925
                  <div className={Styles.socials}>
                    {/* <a
                      href="https://lv.linkedin.com/in/m%C4%81rcis-andersons-8a11b1197"
                      target="_blank"
                    >
                      <FaLinkedin
                        alt="Marchel0925 linkedin account"
                        className={Styles.cardDescriptionSocial}
                      />
                    </a> */}
                    <a href="https://github.com/Marchel0925" target="_blank">
                      <FaGithub
                        target="_blank"
                        alt="Marchel0925 github first account"
                        className={Styles.cardDescriptionSocial}
                      />
                    </a>
                    <a href="https://github.com/NamedUnknown" target="_blank">
                      <FaGithub
                        target="_blank"
                        alt="Marchel0925 github second account"
                        className={Styles.cardDescriptionSocial}
                      />
                    </a>
                  </div>
                </div>
                <p
                  className={Styles.cardDescriptionJob}
                  style={{ marginTop: "2%" }}
                >
                  Developer
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className={Styles.roadmap}>
          <h2 className={Styles.title}>Roadmap</h2>
          <center>
            <img
              className={Styles.roadmapImg}
              src="./roadmap.png"
              alt="ROK Finance roadmap"
            />
            <a
              target="_blank"
              className={Styles.roadmapLink}
              href="https://rok-finance-dev.gitbook.io/whitepaper/roadmap"
            >
              Read More here!
            </a>
          </center>
        </div> */}
        <Roadmap />
      </div>
      <Footer />
    </div>
  )
}
