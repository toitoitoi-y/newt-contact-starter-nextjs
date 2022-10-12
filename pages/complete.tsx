import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Layout } from "../components/Layout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <Layout>
        <div className={styles.Complete}>
          <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" className={styles.Complete_Icon}><path d="M21.313 36.375 39 18.687l-2.875-2.812-14.813 14.812-7.5-7.5L11 26l10.313 10.375ZM25 50c-3.416 0-6.647-.656-9.688-1.969-3.041-1.312-5.698-3.103-7.968-5.375-2.27-2.27-4.063-4.927-5.375-7.969C.655 31.647 0 28.417 0 25c0-3.459.656-6.709 1.969-9.75 1.312-3.041 3.103-5.688 5.375-7.938 2.27-2.25 4.927-4.031 7.968-5.343C18.354.655 21.584 0 25 0c3.459 0 6.709.656 9.75 1.969 3.041 1.312 5.687 3.093 7.937 5.344 2.25 2.25 4.032 4.896 5.345 7.937C49.343 18.291 50 21.541 50 25c0 3.416-.656 6.647-1.969 9.687-1.312 3.042-3.094 5.698-5.344 7.969-2.25 2.27-4.896 4.063-7.937 5.375C31.709 49.345 28.459 50 25 50Zm0-3.75c5.916 0 10.938-2.073 15.062-6.219C44.187 35.885 46.25 30.875 46.25 25c0-5.916-2.062-10.938-6.188-15.063C35.938 5.814 30.916 3.75 25 3.75c-5.875 0-10.885 2.063-15.031 6.188C5.822 14.06 3.75 19.083 3.75 25c0 5.875 2.073 10.885 6.219 15.031C14.115 44.178 19.125 46.25 25 46.25Z" fill="#333" fill-rule="nonzero" /></svg>
          <h1 className={styles.Complete_Title}>Thank you!</h1>
          <p className={styles.Complete_Text}>Your submission has been received</p>
          <div className={styles.Complete_Link}>
            <a href="/">Home</a>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Home
