import React from 'react'
import { connect } from 'react-redux'
import { ping } from '../../redux/actions/actions'
import { bindActionCreators } from 'redux'
import CategoryWrapper from './categoryWrapper.container'
import { HomeContent } from './home.style'

const Home = props => {
  return (
    <HomeContent>
      <CategoryWrapper />
    </HomeContent>
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
