import type { NextPage } from 'next'
import Head from 'next/head'
import router from 'next/router'
import styles from '../styles/Home.module.css'
import { Layout } from '../components/Layout'
import { useCallback, useState } from 'react'

type SubmissionData = {
  name: string
  email: string
  comment: string
}

const Home: NextPage = () => {
  const [data, setData] = useState<SubmissionData>({
    name: '',
    email: '',
    comment: '',
  })

  const onSubmit = useCallback(async (data: SubmissionData) => {
    if (!data.name || !data.email || !data.comment) {
      alert('Please fill in all fields.')
      return
    }
    const formData = new FormData()
    formData.append('name', data.name)
    formData.append('email', data.email)
    formData.append('comment', data.comment)
    await fetch(process.env.NEXT_PUBLIC_NEWT_FORM_ENDPOINT as string, {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    })
      .then((res) => {
        router.push('/complete')
      })
      .catch((err) => {
        router.push('/complete_error')
      })
  }, [])

  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <Layout>
        <div className={styles.Contact}>
          <h1 className={styles.Contact_Title}>Contact us</h1>
          <p className={styles.Contact_Text}>
            Please fill this form in a decent manner.
          </p>
          <form className={styles.Contact_Form}>
            <label htmlFor="name" className={styles.Contact_Label}>
              Full Name*
            </label>
            <input
              id="name"
              type="text"
              className={styles.Contact_InputText}
              value={data.name}
              onChange={(e) => {
                setData({ ...data, name: e.target.value })
              }}
              required
            />
            <label htmlFor="email" className={styles.Contact_Label}>
              Email*
            </label>
            <input
              id="email"
              type="email"
              className={styles.Contact_InputText}
              value={data.email}
              onChange={(e) => {
                setData({ ...data, email: e.target.value })
              }}
              required
            />
            <label htmlFor="comment" className={styles.Contact_Label}>
              Comment*
            </label>
            <textarea
              id="comment"
              className={styles.Contact_Textarea}
              rows={4}
              value={data.comment}
              onChange={(e) => {
                setData({ ...data, comment: e.target.value })
              }}
              required
            ></textarea>
            <button
              type="submit"
              className={styles.Contact_Button}
              onClick={(e) => {
                e.preventDefault()
                onSubmit(data)
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </Layout>
    </>
  )
}

export default Home
