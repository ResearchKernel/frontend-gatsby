import React from 'react'
import './home.style.css'
import { FaBars, FaGlobe, FaFire } from 'react-icons/fa'
import { useWindowWidth } from '../../hooks'

const Home = () => {
  const width = useWindowWidth()
  const isMobile = width < 757
  return (
    <>
      <div className="Sidebar" style={isMobile ? { width: 0 } : { width: 220 }}>
        <div className="Sidebar__Filter">
          <div className="Sidebar-Label">My Subscriptions</div>
          <input type="text" placeholder="Filter" />
        </div>
        <div className="Sidebar__Feeds" role="menu">
          <div className="Sidebar-Label">ResearchKernel Feeds</div>
          <div className="Sidebar__Items">
            <a className="Sidebar__Items-Subcategory" href="/">
              <FaGlobe />
              <span>All</span>
            </a>
            <a className="Sidebar__Items-Subcategory" href="/">
              <FaFire />
              <span>Popular</span>
            </a>
            <a className="Sidebar__Items-Subcategory" href="/">
              <FaBars />
              <span>Recently Viewed</span>
            </a>
          </div>
        </div>
      </div>
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
