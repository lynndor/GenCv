import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" /> 
        <link href="https://fonts.googleapis.com/css2?family=Lateef&display=swap" rel="stylesheet" /> 
        <link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet" /> 
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@1,900&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100&display=swap" rel="stylesheet"></link>
      </Head>
      <div className={styles.contentContainer}>
        <h4 className={styles.logotext}>
          GenCv.
        </h4>
        <div className={styles.content}>
          <div className={styles.callToAcionContainer}>
            <h1>Create your Proffessional CV</h1>
            <p className={styles.text}>Follow 3 simple steps to create your <span className={styles.highlight}>awesome</span> CV</p>
            <Link href="/dashboard" >
              <a className={styles.callToAcion}>Try it out</a>
            </Link>
          </div>
          <div className={styles.samples}>
            <img className={styles.img1}src="/cv2.jpeg" />
            <img className={styles.img2} src="/cv4.png" />
          </div>
        </div>
      </div>
    </div>
  )
}
