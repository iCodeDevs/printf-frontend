import React from "react"
import Head from "next/head"

import Layout from './../components/Layout/index'

const Home = () => (
    <div className="container">
    <Head>
      <title>printf</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Layout>
      <h1 className="title">
        Welcome Page
      </h1>
    </Layout>
  </div>
)

export default Home
