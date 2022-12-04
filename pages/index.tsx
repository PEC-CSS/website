import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | ACM at PEC</title>
        <meta name="description" content="PEC ACM CSS, a community" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://github.com/PEC-CSS">PEC ACM!</a>
        </h1>
      </main>
    </div>
  )
}
