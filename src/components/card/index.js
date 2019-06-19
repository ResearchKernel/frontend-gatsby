import React from 'react'
import { Card, Col, Row, Icon, Avatar } from 'antd'
const { Meta } = Card

const CardWrapper = ({ altImage, source, title, description }) => (
  <Col span={8}>
    <Card
      bordered={false}
      hoverable
      style={{ width: 300, minHeight: 500 }}
      size="large"
      cover={<img alt={altImage} src={source} />}
    >
      <Meta title={title} description={description} />
    </Card>
  </Col>
)

export default CardWrapper
