import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Product Assurance Agent</title>
        <meta property="og:title" content="Product Assurance Agent" />
      </Helmet>
    </div>
  )
}

export default Home
