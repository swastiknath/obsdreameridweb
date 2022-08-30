import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>OBS Dreamer ID</title>
        <meta name="description" content="The Observation Dreamer ID SSO" />
        <link rel="icon" href="/favicon.ico" />
        <link
            href="https://fonts.googleapis.com/css2?family=Comfortaa&display=fallback"
            rel="stylesheet"
        />
      </Head>

      <main className={styles.main}>

          <Image
              margin="0 0 15px"
              src="/obslonglogo.svg" alt="OBS LOGO" width={75} height={45} color="#ffffff"/>
          <h1 className={styles.title}>
          The Observation <a>Dreamer ID SSO</a>
        </h1>

        <p className={styles.description}> Million Dreams. One Dreamer ID. </p>

       <div className={styles.bodyText}>
           <p>Unified Single-Sign-On for all the internal OBS Dreamers. <br/>Secured by OBS SecuRA Trusted Platform.</p> </div>

        <form action="/" className={styles.form} method="post">

            <label htmlFor="dreamer_id">OBS Dreamer ID</label>
            <input type="text" id="dreamer_id" name="dreamer_id" minLength="10" maxLength="10"
                   placeholder="10 Character Long OBS Dreamer ID."
                   required/>

            <label htmlFor="passcode">Passcode</label>
            <input type="password" id="passcode" name="passcode" minLength="8" maxLength="15"
                   placeholder="Your super secret Passcode."
                   required/>

            <button type="submit">Login to Dreamer ID</button>
        </form>
          <Image src="/rvrhm.svg" alt="RVRHM Logo" width={150} height={80}/>



      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Copyright (C) 2021-2022 The Observation Technologies Inc. All rights are reserved.
        </a>
      </footer>
    </div>
  )
}
