import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Home from '../components/home/home.component'
import '../base.css'
import Header from '../components/header/header'

const IndexPage = () => (
  <Layout>
    <SEO
      title="ResearchKernel"
      keywords={[
        'Researchkernel',
        'kernel',
        'research',
        'open source',
        'arxiv.org',
      ]}
    />
    <Home />
  </Layout>
)

export default IndexPage
