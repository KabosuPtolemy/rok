import Styles from "../styles/Index.module.css"
import Head from "next/head"
import Footer from "../components/Footer"
import {
  BsFillCartCheckFill,
  BsShieldLockFill,
  BsSmartwatch,
  BsFillCheckCircleFill,
} from "react-icons/bs"

import { useState, useRef, useEffect } from "react"

function Index() {
  const appHead = () => {
    return (
      <Head>
        <title>ROK Finance | Home</title>
        <meta
          name="description"
          content="The First NFT CrowdFunding Platform on ETH chain."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content="mzmbOWuK_aCn511x7jZh5ARjBwzAUQh9j2XhBG8h3p0"
        />
        {/* https://search.google.com/search-console/welcome?utm_source=about-page */}
        <link rel="icon" href="/rok2.svg" />
        <link rel="apple-touch-icon" href="/rok2.svg" />
      </Head>
    )
  }
  const pageTitle = () => {
    return (
      <div className={Styles.pageStart}>
        <center>
          <h1 className={Styles.titleBox}>ROK FINANCE</h1>
          <div className={Styles.mainTitle}>
            The First NFT CrowdFunding Platform on ETH chain.
          </div>
        </center>
      </div>
    )
  }
  const value = () => {
    return (
      <div className={Styles.valueContainer}>
        <h1 className={Styles.valueMainTitle}>
          Kick-start your project to the next level!
        </h1>
        <h3 className={Styles.valueMainSubtitle}>
          By leveraging the power of crowdfunding, won't only provide the
          necessary funds for your project but also drive traffic to your NFT
          project, creating more exposure and helping it to succeed.
        </h3>
        <div className={Styles.callToAction}>
          <a className={Styles.actionTitle}>What are you waiting for?</a>
          <a href="crowdfunding?expand=true" className={Styles.textLink}>
            Submit now!
          </a>
        </div>
      </div>
    )
  }

  const features = () => {
    const ref = useRef(null)

    const handleClick = (sectionId) => {
      const section = document.getElementById(sectionId)
      const sectionHeight = section.offsetHeight
      const windowHeight = window.innerHeight
      const offset = (windowHeight - sectionHeight) / 2

      section.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
        inlineTo: "center",
        offset: -offset,
      })
    }

    return (
      <div className={Styles.allFeatureContainer}>
        <div className={Styles.featureContainer}>
          <div
            className={Styles.featureOne}
            onClick={() => handleClick("marketing")}
          >
            <a className={Styles.featuresTitle}>
              <BsFillCartCheckFill className={Styles.featuresIcon} />
              Free Marketing
            </a>
            <a className={Styles.featuresDescription}>
              Whilst your project is collecting funds, you are receiving free
              marketing just for being on our website!
            </a>
          </div>
          <div
            className={Styles.featureTwo}
            onClick={() => handleClick("security")}
          >
            <a className={Styles.featuresTitle}>
              <BsShieldLockFill className={Styles.featuresIcon} />
              Security
            </a>
            <a className={Styles.featuresDescription}>
              We've made sure this is safe to use for project creators and
              investors.
            </a>
          </div>
          <div
            className={Styles.featureThree}
            onClick={() => handleClick("time")}
          >
            <a className={Styles.featuresTitle}>
              <BsSmartwatch className={Styles.featuresIcon} />
              Time Efficient
            </a>
            <a className={Styles.featuresDescription}>
              No more long hours browsing the web for the next crypto project!
            </a>
          </div>
        </div>
        <br />
        <div className={Styles.featureExpandedContainer} id="marketing">
          <div>
            <a className={Styles.featureExpandedTitle}>
              Free Marketing Benefits for Your NFT Project.
            </a>
            <a className={Styles.featureExpandedDescription}>
              When you launch a crowdfunding campaign for your NFT project on
              our website, your project will be showcased and promoted to our
              website visitors and potentially to our social media followers as
              well. This exposure provides you with free marketing for your
              project, which can help increase its visibility and attract more
              potential investors.
            </a>
            <br />
            <br />
            <a className={Styles.featureExpandedDescription}>
              Essentially, by listing your project on our website, you are
              receiving free promotion and visibility for your project to a
              wider audience, without having to spend additional resources on
              advertising or marketing efforts. This can be a valuable benefit
              for NFT creators who are looking to raise funds and gain
              visibility for their work.
            </a>
          </div>
          <img
            src="../feature_images/featureMarketing.svg"
            className={Styles.featureExpandedImage}
          />
        </div>

        <div className={Styles.featureExpandedContainer} id="security">
          <img
            src="../feature_images/featureSecurity.svg"
            className={Styles.featureExpandedImage}
          />
          <div>
            <a className={Styles.featureExpandedTitle}>
              Ensuring Security for Your NFT Crowdfunding Campaign.
            </a>
            <a className={Styles.featureExpandedDescription}>
              When we say that our NFT crowdfunding website is safe to use, we
              mean that we have taken measures to ensure the security of both
              project creators and investors.
            </a>
            <br />
            <br />
            <div className={Styles.featureExpandedUlist}>
              <div className={Styles.featureExpandedList}>
                <BsFillCheckCircleFill className={Styles.featuresListIcon} />
                <a className={Styles.featureExpandedList}>
                  User Authentication and Authorization
                </a>
              </div>
              <br />
              <a className={Styles.featureExpandedList}>
                <BsFillCheckCircleFill className={Styles.featuresListIcon} />
                KYC Compliance
              </a>
              <br />
              <a className={Styles.featureExpandedList}>
                <BsFillCheckCircleFill className={Styles.featuresListIcon} />
                Regular Audits and Security Checks
              </a>
            </div>
          </div>
        </div>

        <div className={Styles.featureExpandedContainer} id="time">
          <div>
            <a className={Styles.featureExpandedTitle}>
              Saving Time with Our Efficient NFT Crowdfunding Platform.
            </a>
            <a className={Styles.featureExpandedDescription}>
              When we say that our NFT crowdfunding platform is time efficient,
              we mean that it saves you from the hassle of spending long hours
              searching and browsing the web for the next crypto project to
              invest in.
            </a>
            <br />
            <br />
            <div className={Styles.featureExpandedUlist}>
              <a className={Styles.featureExpandedList}>
                <BsFillCheckCircleFill className={Styles.featuresListIcon} />
                Easy Navigation
              </a>
              <br />
              <a className={Styles.featureExpandedList}>
                <BsFillCheckCircleFill className={Styles.featuresListIcon} />
                Efficient Project Details
              </a>
              <br />
              <a className={Styles.featureExpandedList}>
                <BsFillCheckCircleFill className={Styles.featuresListIcon} />
                Networking Opportunities
              </a>
            </div>
          </div>
          <img
            src="../feature_images/featureTime.svg"
            className={Styles.featureExpandedImage}
          />
        </div>
      </div>
    )
  }

  const FAQSection = () => {
    const [selectedQuestion, setSelectedQuestion] = useState(null)
    const faqRef = useRef(null)

    const faqData = [
      {
        question: "What is crowdfunding?",
        answer:
          "Crowdfunding is a method of raising funds from a large number of people, usually via the internet. It involves creating a campaign or project on a crowdfunding platform, and asking people to contribute small amounts of money to help fund the project. In return, backers often receive rewards or perks related to the project or product being funded. Crowdfunding can be used for a variety of purposes, such as launching a new product or business, funding a creative project, supporting a charitable cause, or helping individuals in need.",
      },
      {
        question: "What is an NFT crowdfunding platform?",
        answer:
          "An NFT crowdfunding platform is a platform that allows creators to crowdfund their NFT projects by accepting ethereum from investors in exchange for NFTs.",
      },
      {
        question: "How does an NFT crowdfunding platform work?",
        answer:
          "Creators list their NFT project on the platform and set a funding goal and a deadline. Investors can then pledge ethereum towards the project in exchange for an NFT. If the funding goal is met by the deadline, the creator creates and sends out the NFTs to the investors and receives the pledged funds. If the funding goal is not met, the investors receive their ethereum back.",
      },
      {
        question:
          "What types of NFT projects can be crowdfunded on an NFT crowdfunding platform?",
        answer:
          "NFT crowdfunding platform can be used to fund a wide range of NFT projects, including digital art, music, video games, collectibles, and more.",
      },
      {
        question: "How can I apply for NFT crowdfunding?",
        answer:
          "At the moment all you have to do is fill out a form and we will contact you as soon as we will review it. Soon enough you will be able to submit your project directly on our site without having the need to fill out a form. Also to submit your project you will need to be a holder of our ROK Token. More information about this coming soon.",
      },
      {
        question:
          "Are there any risks associated with using an NFT crowdfunding platform?",
        answer:
          "As with any investment, there are risks associated with using an NFT crowdfunding platform. The value of NFTs and cryptocurrencies can be volatile, and there is no guarantee that a project will be successful or that the promised NFTs will be valuable in the future. It's important to do your own research and assess the risks before investing in any NFT crowdfunding campaign.",
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
        <h2 className={Styles.featureExpandedTitle}>
          Frequently Asked Questions
        </h2>
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

  return (
    <div className={Styles.container}>
      {appHead()}
      <div className={Styles.landingPage}>
        {pageTitle()}
        {value()}
      </div>
      <div className={Styles.secondContainer}>
        {features()}
        {FAQSection()}
      </div>
      <Footer />
    </div>
  )
}
export default Index
