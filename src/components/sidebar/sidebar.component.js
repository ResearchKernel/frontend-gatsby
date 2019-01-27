import React, { useState } from 'react'
import { FaBars, FaGlobe, FaFire } from 'react-icons/fa'
import { SkeletonSidebar } from '../skeletons'
import list from '../../list.json'

const CategoryList = () => {
  //   const [listMap, setListMap] = useState(null)
  const tlist = Object.values(list).map((item, index) => {
    return (
      <a className="Sidebar__Items-Subcategory" href="/" key={index}>
        {/* <FaFire /> */}
        <span>{item.name}</span>
      </a>
    )
  })
  //   setListMap(tlist)
  //   return !listMap ? <SkeletonSidebar list={list} /> : listMap
  return tlist
}

const Sidebar = ({ isMobile }) => {
  return (
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
      <div className="Sidebar__Feeds" role="menu">
        <div className="Sidebar-Label">Categories</div>
        <div className="Sidebar__Items">
          <CategoryList />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
