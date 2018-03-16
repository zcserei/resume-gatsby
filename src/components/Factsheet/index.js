import React from 'react'

import Facts from './Facts'

import { FlexContainer, FlexElement } from '../_styled'

const Meaning = () => {
  return (
    <FlexContainer>
      <FlexElement flex={1}>
        <Facts />
      </FlexElement>
    </FlexContainer>
  )
}

export default Meaning
