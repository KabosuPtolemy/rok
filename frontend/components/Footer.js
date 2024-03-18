import Styles from "../styles/Footer.module.css"
import { FaEnvelope, FaTwitter, FaDiscord } from "react-icons/fa"

function Footer() {
  return (
    <div className={Styles.footer}>
      <div className={Styles.footerCol}>
        <h4 className={Styles.footerColh4}>forms</h4>
        <ul className={Styles.ul}>
          <li className={Styles.list}>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScP7o4UHr86xhFKP4TfrqDeZ_NR5NIp287fZ_ZrOLGiJTkTzQ/viewform"
              className={Styles.title}
              target="_blank"
            >
              Ambassador Program
            </a>
          </li>
          <li className={Styles.list}>
            <a href="crowdfunding?expand=true" className={Styles.title}>
              Crowdfunding Application
            </a>
          </li>
          <li className={Styles.list}>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc1om36i_5xyyaoVjQ4M0enaHR0MmDsy1ONWm4zOxLPp4KsSw/viewform"
              className={Styles.title}
              target="_blank"
            >
              Business Proposal
            </a>
          </li>
        </ul>
      </div>
      <div className={Styles.footerCol}>
        <h4 className={Styles.footerColh4}>legal</h4>
        <ul className={Styles.ul}>
          <li className={Styles.list}>
            <a
              href="https://rok-finance-dev.gitbook.io/whitepaper/legal/privacy-policy"
              target="_blank"
              className={Styles.title}
            >
              Privacy Policy
            </a>
          </li>
          <li className={Styles.list}>
            <a
              href="https://rok-finance-dev.gitbook.io/whitepaper/legal/terms-of-use"
              target="_blank"
              className={Styles.title}
            >
              Terms of Use
            </a>
          </li>
        </ul>
      </div>
      <div className={Styles.footerCol}>
        <h4 className={Styles.footerColh4}>about</h4>
        <ul className={Styles.ul}>
          <li className={Styles.list}>
            <a href="./company" className={Styles.title}>
              Company
            </a>
            <a
              href="https://rok-finance-dev.gitbook.io/whitepaper/nft-crowdfunding/pricing"
              className={Styles.title}
              target="_blank"
            >
              pricing
            </a>
          </li>
          <li className={Styles.list}>
            <a
              href="https://rok-finance-dev.gitbook.io/whitepaper/"
              className={Styles.title}
              target="_blank"
            >
              Whitepaper
            </a>
          </li>
        </ul>
      </div>
      <div className={Styles.footerCol}>
        <h4 className={Styles.footerColh4}>socials</h4>
        <ul className={Styles.ulImage}>
          <li className={Styles.list}>
            <a href="mailto:rok.finance.dev@gmail.com">
              <FaEnvelope
                className={Styles.image}
                alt="mail"
                // style={{
                //   height: "35px",
                //   width: "35px",
                //   position: "relative",
                // }}
              />
            </a>
          </li>
          <li className={Styles.list}>
            <a href="https://twitter.com/rokfinance" target="_blank">
              <FaTwitter
                className={Styles.image}
                alt="twitter"
                // style={{
                //   height: "35px",
                //   width: "35px",
                //   position: "relative",
                // }}
              />
            </a>
          </li>
          <li className={Styles.list}>
            <a href="https://discord.gg/WPcuXpSvpX" target="_blank">
              <FaDiscord
                className={Styles.image}
                alt="discord"
                // style={{
                //   height: "35px",
                //   width: "35px",
                //   position: "relative",
                // }}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Footer
