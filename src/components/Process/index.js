import React from 'react'

import { FlexContainer } from '../_styled'

import Description from './Description'
import Steps from './Steps'

const Process = () => {
  return (
    <div>
      <FlexContainer>
        <Description />
      </FlexContainer>
      <FlexContainer>
        <Steps />
      </FlexContainer>
    </div>
  )
}

export default Process
