import React from 'react'
import './index.css'

export const SkeletonSidebar = ({ list }) => {
  return (
    <>
      {Object.keys(list).map((item, index) => {
        return (
          <div className="skeleton-post" key={index}>
            <div className="avatar" />
            <div className="line" />
          </div>
        )
      })}
    </>
  )
}
