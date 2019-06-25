import React from 'react'
import { Card, Row, Col } from 'antd'
import './home.style.css'
import categoryList from '../../list.json'
const { Meta } = Card

const category = Object.values(categoryList)

const CategoryWrapper = props => {
  return (
    <React.Fragment>
      <Row gutter={16}>
        {category.map(item => (
          <Col span={8}>
            <div style={{ display: 'flex', position: 'relative' }}>
              <Card
                hoverable
                style={{
                  width: 300,
                  height: 80,
                  overflow: 'scroll',
                }}
              >
                <Meta title={item.name} />
              </Card>
            </div>
          </Col>
        ))}
        <br />
      </Row>
      {console.log(category)}
    </React.Fragment>
  )
}

export default CategoryWrapper
