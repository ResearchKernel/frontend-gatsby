import React from 'react'

import LayoutComponent from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <LayoutComponent>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </LayoutComponent>
)

export default NotFoundPage
