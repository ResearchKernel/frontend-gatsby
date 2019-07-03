import React from 'react'
import './home.style.css'
import { Link } from 'gatsby'
import categoryList from '../../list.json'
import { CategoryCarousal, CategoryCard } from './categoryWrapper.style'
const { Meta } = CategoryCard

const CategoryWrapper = props => {
  const category = Object.keys(categoryList)
  return (
    <CategoryCarousal>
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
    </CategoryCarousal>
  )
}

export default CategoryWrapper
