import React from 'react'
import { Card, Icon } from 'antd'
const { Meta } = Card

const CardWrapper = ({
  altImage,
  source,
  title,
  description,
  linkedInUrl,
  githubUrl,
}) => (
  <Card
    bordered={false}
    style={{ width: 300, height: 500, overflow: 'scroll' }}
    size="large"
    cover={<img alt={altImage} src={source} />}
    actions={[
      <a href={linkedInUrl} target="_blank">
        <Icon type="linkedin" theme="filled" />
      </a>,
      <a href={githubUrl} target="_blank">
        <Icon type="github" theme="filled" />
      </a>,
    ]}
  >
    <Meta title={title} description={description} />
    <br />
  </Card>
)

export default CardWrapper
