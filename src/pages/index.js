import React from 'react'
import { Provider } from 'react-redux'
import LayoutComponent from '../components/layout'
import SEO from '../components/seo'
import Home from '../components/home/home.component'
import '../base.css'
import store from '../redux'

const IndexPage = () => (
  <Provider store={store}>
    <LayoutComponent isSearch={true}>
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
    </LayoutComponent>
  </Provider>
)

export default IndexPage
