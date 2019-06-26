import React from 'react'
import { Card, Row, Col } from 'antd'
import './home.style.css'
import { Link } from 'gatsby'
import categoryList from '../../list.json'
const { Meta } = Card

const category = Object.keys(categoryList)

const CategoryWrapper = props => {
  return (
    <React.Fragment>
      <Row gutter={16}>
        {category.map(categoryKey => {
          let categoryValue = categoryList[categoryKey]
          return (
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
                  <Link to={`/${categoryKey}`}>
                    <Meta title={categoryValue.name} />
                  </Link>
                </Card>
              </div>
            </Col>
          )
        })}
        <br />
      </Row>
    </React.Fragment>
  )
}

export default CategoryWrapper
