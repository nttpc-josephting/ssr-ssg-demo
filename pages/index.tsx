/* eslint-disable @next/next/no-html-link-for-pages */
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>CSR, SSR, SSG, ISR Examples</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <a href="/csr" className={styles.card}>
            <h2>CSR &rarr;</h2>
            <p>Client-side rendering</p>
          </a>

          <a href="/ssr" className={styles.card}>
            <h2>SSR &rarr;</h2>
            <p>Server-side rendering</p>
          </a>

          <a
            href="/ssg"
            className={styles.card}
          >
            <h2>SSG &rarr;</h2>
            <p>Static site generator</p>
          </a>

          <a
            href="/isr"
            className={styles.card}
          >
            <h2>ISR &rarr;</h2>
            <p>Incremental static regeneration</p>
          </a>
        </div>
      </main>
    </div>
  )
}

export default Home
