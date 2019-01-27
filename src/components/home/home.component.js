import React from 'react'
import './home.style.css'
import Sidebar from '../sidebar/sidebar.component'
import { useWindowWidth } from '../../hooks'

const Home = () => {
  const width = useWindowWidth()
  const isMobile = width < 757
  return (
    <>
      <Sidebar isMobile={isMobile} />
      <div
        className="Content"
        style={isMobile ? { paddingLeft: 0 } : { paddingLeft: 220 }}
      >
        Content
      </div>
    </>
  )
}

export default Home
