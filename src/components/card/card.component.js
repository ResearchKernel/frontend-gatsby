import React from 'react'
import { Card } from 'antd'
const { Meta } = Card

const CardWrapper = ({ altImage, source, title, description }) => (
  <Card
    bordered={false}
    hoverable
    style={{ width: 300, height: 500, overflow: 'scroll' }}
    size="large"
    cover={<img alt={altImage} src={source} />}
  >
    <Meta title={title} description={description} />
  </Card>
)

export default CardWrapper
