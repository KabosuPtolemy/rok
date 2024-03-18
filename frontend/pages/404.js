import Link from "next/link"
import Head from "next/head"
import Styles from "../styles/404.module.css"

const head = () => {
  return (
    <Head>
      <title>404 - Page Not Found</title>
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
    </Head>
  )
}

export default function Custom404() {
  return (
    <div className={Styles.container}>
      {head()}
      <h1 className={Styles.title}>404 - Page Not Found</h1>
      <p className={Styles.message}>
        Sorry, the page you are looking for cannot be found.
      </p>
      <Link href="/">
        <p className={Styles.button}>Go back to the homepage</p>
      </Link>
    </div>
  )
}
