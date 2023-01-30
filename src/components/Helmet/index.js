import React from 'react'
import { Helmet as Head } from 'react-helmet'

const Helmet = ({ title }) => {
  return (
    <Head>
      <meta charSet='utf-8' />
      <meta name='description' content='Petgram practice application' />
      <title>{title} | Petgram</title>
    </Head>
  )
}

export default Helmet
