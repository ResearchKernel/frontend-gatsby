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
    style={{ width: 400, height: 700, overflow: 'scroll' }}
    size="large"
    cover={<img alt={altImage} src={source} />}
    actions={[
      <a href={linkedInUrl} target="">
        <Icon type="linkedin" theme="filled" />
      </a>,
      <a href={githubUrl} target="">
        <Icon type="github" theme="filled" />
      </a>,
    ]}
  >
    <Meta title={title} description={description} />
    <br />
  </Card>
)

export default CardWrapper
