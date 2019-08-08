import { Card, Input, Layout } from 'antd'
import React from 'react'
import SearchComponent from '../searchbar/search.component'
import { connect } from 'react-redux'
import { ping } from '../../redux/actions/actions'
import { bindActionCreators } from 'redux'
import './home.style.css'
// import image from '../../static/download.png'
import wallpaper from '../../static/rk.png'
import CategoryWrapper from './categoryWrapper.container'

const { Content, Footer } = Layout
const gridStyle = {
  width: '30%',
  hoverable: true,
}
// const Search = Input.Search

const Home = props => {
  return (
    <div>
      <Content>
        <div className="container">
          <img/>
          <div className="center">
            <SearchComponent />
            <CategoryWrapper />
          </div>
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

const mapStateToProps = state => ({
  pingState: state.ping,
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      ping,
    },
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
