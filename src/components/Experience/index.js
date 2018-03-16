import React from 'react'

import { FlexContainer } from '../_styled'

import Contributions from './Contributions'
import Institutions from './Institutions'
import Work from './Work'

const Experience = () => {
  return (
    <div>
      <FlexContainer>
        <Work />
      </FlexContainer>
      <FlexContainer>
        <Institutions />
      </FlexContainer>
      <FlexContainer>
        <Contributions />
      </FlexContainer>
    </div>
  )
}

export default Experience
