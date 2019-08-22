import styled from 'styled-components'
import { Input } from 'antd'
const { Search } = Input

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`
export const ComponentHeader = styled.div`
  position: relative;
  text-align: center;
  background: linear-gradient(
    60deg,
    rgba(84, 58, 183, 1) 0%,
    rgba(0, 172, 193, 1) 100%
  );
  color: white;
`
export const MainHeading = styled.div`
  height: 65vh;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
`
export const SubHeading = styled.div`
  position: relative;
  height: 20vh;
  text-align: center;
  background-color: white;
`
export const CustomHeading = styled.h1`
  font-weight: 300;
  letter-spacing: 2px;
  font-size: 48px;
  color: #ffffff;
`
export const TagLine = styled.p`
  letter-spacing: 1px;
  font-size: 14px;
  color: #333333;
`
export const CustomSearch = styled(Search)`
  width: 40%;
`
