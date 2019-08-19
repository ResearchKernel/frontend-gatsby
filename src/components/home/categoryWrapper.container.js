import React from 'react'
import { Link } from 'gatsby'
import categoryList from '../../list.json'
import { CategoryCarousal, CategoryCard } from './categoryWrapper.style'
import { Row, Col } from 'antd'
import icon from '../../images/icon.png'
const { Meta } = CategoryCard

const CategoryWrapper = props => {
  const category = Object.keys(categoryList)
  return (
    <CategoryCarousal>
      <Row gutter={16}>
        {category.map(categoryKey => {
          const categoryValue = categoryList[categoryKey]
          return (
            <Col span={8}>
              <CategoryCard hoverable>
                <Link
                  key={categoryKey}
                  to={`/category?key=${categoryKey}`}
                  state={{ categoryKey: categoryKey }}
                >
                  <Meta title={categoryValue.name} />
                  <img alt="example" src={icon} />
                </Link>
              </CategoryCard>
              <br />
            </Col>
          )
        })}
      </Row>
    </CategoryCarousal>
  )
}

export default CategoryWrapper
