import React from 'react'
import './home.style.css'
import { Link } from 'gatsby'
import categoryList from '../../list.json'
import { CategoryCarousal, CategoryCard } from './categoryWrapper.style'
import { Carousel } from 'antd';

const { Meta } = CategoryCard

const CategoryWrapper = props => {
  const category = Object.keys(categoryList)
  return (
    <Carousel autoplay>
      {category.map(categoryKey => {
        const categoryValue = categoryList[categoryKey]
        return (
          <Link
            key={categoryKey}
            to={`/category?key=${categoryKey}`}
            state={{ categoryKey: categoryKey }}
          >
            <CategoryCard hoverable>
              <Meta title={categoryValue.name} />
            </CategoryCard>
          </Link>
        )
      })}
    </Carousel>
  )
}

export default CategoryWrapper
