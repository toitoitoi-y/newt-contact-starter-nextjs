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
        <div className={styles.Contact}>
          <h1 className={styles.Contact_Title}>Contact us</h1>
          <p className={styles.Contact_Text}>Please fill this form in a decent manner</p>
          <form className={styles.Contact_Form}>
            <label className={styles.Contact_Label}>Full Name*</label>
            <input type="text" className={styles.Contact_InputText} required />
            <label className={styles.Contact_Label}>Email*</label>
            <input type="email" className={styles.Contact_InputText} required />
            <label className={styles.Contact_Label}>Comment*</label>
            <textarea className={styles.Contact_Textarea} rows={4} required></textarea>
            <button type="submit" className={styles.Contact_Button}>Submit</button>
          </form>
        </div>
      </Layout>
    </>
  )
}

export default Home
