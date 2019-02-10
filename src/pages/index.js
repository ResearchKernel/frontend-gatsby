import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Home from '../components/home/home.component'
import '../base.css'



const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <Home />
  </Layout>
)

export default IndexPage
