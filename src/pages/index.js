import React from 'react'
import { Provider } from 'react-redux'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Home from '../components/home/home.component'
import '../base.css'
import Header from '../components/header/header'
import store from '../redux'

const IndexPage = () => (
  <Provider store={store}>
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
  </Provider>
)

export default IndexPage
