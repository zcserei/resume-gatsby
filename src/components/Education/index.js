import React from 'react'

import { FlexContainer } from '../_styled'

import Extracurricular from './Extracurricular'
import Languages from './Languages'
import Official from './Official'
import Quote from './Quote'

const Education = () => {
  return (
    <div>
      <FlexContainer>
        <Quote />
      </FlexContainer>
      <FlexContainer>
        <Official />
      </FlexContainer>
      <FlexContainer>
        <Extracurricular />
      </FlexContainer>
      <FlexContainer>
        <Languages />
      </FlexContainer>
    </div>
  )
}

export default Education
