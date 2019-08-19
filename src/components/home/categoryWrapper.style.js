import styled from 'styled-components'
import { Card } from 'antd'

export const CategoryCarousal = styled.div`
  display: flex;
  overflow: scroll;
`
export const CategoryCard = styled(Card)`
  margin: 30px;
  width: 220px;
  height: 200px;
  overflow: scroll;
  word-wrap: break-word;
`
