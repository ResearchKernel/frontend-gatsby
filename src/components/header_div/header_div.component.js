import React from 'react'
import { Card, Icon } from 'antd'
const { Meta } = Card

const DivWrapper = ({ altImage, content, color }) => (
  <div
    style={{
      background: color,
      textAlign: 'center',
    }}
  >
    content
  </div>
)

export default DivWrapper
