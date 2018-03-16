import React from 'react'

import { FlexContainer, FlexElement } from '../_styled'

import Headings from './Headings'
import Greeting from './Greeting'

const Meaning = () => {
  return (
    <FlexContainer>
      <FlexElement flex={4} order={2}>
        <Greeting />
      </FlexElement>
      <FlexElement flex={3} order={1}>
        <Headings />
      </FlexElement>
    </FlexContainer>
  )
}

export default Meaning
