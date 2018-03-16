import React from 'react'

import { FlexContainer } from '../_styled'

import Description from './Description'
import ToolList from './ToolList'

const Tools = () => {
  return (
    <div>
      <FlexContainer>
        <Description />
      </FlexContainer>
      <FlexContainer>
        <ToolList />
      </FlexContainer>
    </div>
  )
}

export default Tools
