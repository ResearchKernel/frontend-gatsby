import React from 'react'
import Layout from '../components/layout'

const Category = props => <Layout>{props.location.state.categoryKey}</Layout>

export default Category
