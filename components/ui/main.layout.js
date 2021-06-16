import React from 'react'
import Head from 'next/head'
import Header from '../navigation/header'

const MainLayout = (props) => {
  return (
    <>
      <Head>
        <title>Hokusai tribute</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="This is a tribute page to great hokusai"
        />
        <meta name="keywords" content="hokusai,art,paint" />
      </Head>
      <Header />
      <div className="container">{props.children}</div>
    </>
  )
}

export default MainLayout
