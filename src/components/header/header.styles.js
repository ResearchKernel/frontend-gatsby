import styled from 'styled-components'
import { Menu } from 'antd'

const { Item } = Menu

export const HeaderMenu = styled(Menu)`
  display: flex;
  justify-content: space-between;
  line-height: 40px;
  position: fixed;
  z-index: 1;
  width: 100%;
  // background: linear-gradient(to left, #009fff, #ec2f4b);
`

export const HeaderItem = styled(Item)`
  margin-bottom: 10px;
  font-size: 15;
  padding: 0.9rem;
  color: #fff;
  background-color: transparent;
  white-space: nowrap;
`
