import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { ping } from '../../redux/actions/actions'
import { bindActionCreators } from 'redux'
import CategoryWrapper from './categoryWrapper.container'
import { HomeContent } from './home.style'
import SearchContainer from '../search/Search.component'

const Home = props => {
  return (
    <Fragment>
      <SearchContainer />
      <HomeContent>
        <CategoryWrapper />
      </HomeContent>
    </Fragment>
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
