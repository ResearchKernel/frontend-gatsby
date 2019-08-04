import React from 'react'
import { Card,  } from 'antd'
const DivWrapper = ({ altImage, content, color, fontSize, font }) => (
  <div
    style={{
      background: color,
      textAlign: 'center',
      fontSize: fontSize,
    }}
  />
)

export default DivWrapper
