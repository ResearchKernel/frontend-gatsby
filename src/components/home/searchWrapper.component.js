import React from 'react'
import { Card, Input, Layout, Row } from 'antd'
import image from '../../static/download.png'
import './home.style.css'
import SearchComponent from '../searchbar/search.component'

const SearchWrapper = props => {
  return (
    <React.Fragment>
      <div class="container">
        <img src={image} alt="Cinque Terre" />
        <div class="center">
          <SearchComponent />
        </div>
      </div>
    </React.Fragment>
  )
}

export default SearchWrapper
