import React, { Fragment } from 'react'
import Waves from '../common/Waves'
import {
  ComponentHeader,
  MainHeading,
  SubHeading,
  CustomHeading,
  TagLine,
  FlexContainer,
  CustomSearch,
} from './Search.style'

const SearchContainer = () => {
  return (
    <Fragment>
      <ComponentHeader>
        <MainHeading>
          <CustomHeading>Search Papers</CustomHeading>
          <CustomSearch placeholder="Search Papers by Title, Author(s), Abstract... " />
        </MainHeading>

        <Waves />
      </ComponentHeader>
      <FlexContainer>
        <SubHeading>
          <TagLine>Research Kernel tagline</TagLine>
        </SubHeading>
      </FlexContainer>
    </Fragment>
  )
}

export default SearchContainer
