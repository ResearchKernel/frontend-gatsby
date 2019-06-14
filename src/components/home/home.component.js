import { Card, Input, Layout, Breadcrumb } from 'antd'
import React from 'react'
import SearchComponent from '../searchbar/search.component'
import './home.style.css'

const { Content, Footer } = Layout
const gridStyle = {
  width: '30%',
  hoverable: true,
}
const Search = Input.Search

const Home = () => {
  return (
    <div>
      <SearchComponent />
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
          <Card title="Nonlinear Sciences">
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
          </Card>
        </div>
      </Content>

      <Footer style={{ textAlign: 'center' }}>
        <Card title="Nonlinear Sciences">
          <Card.Grid style={gridStyle}>Content</Card.Grid>
          <Card.Grid style={gridStyle}>Content</Card.Grid>
          <Card.Grid style={gridStyle}>Content</Card.Grid>
          <Card.Grid style={gridStyle}>Content</Card.Grid>
          <Card.Grid style={gridStyle}>Content</Card.Grid>
          <Card.Grid style={gridStyle}>Content</Card.Grid>
        </Card>
      </Footer>
    </div>
  )
}

export default Home
