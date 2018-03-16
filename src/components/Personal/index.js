import React from 'react'
import styled from 'react-emotion'

import { fuzzyBackground } from '../_css'
import { FlexElement } from '../_styled'

import Zoltan from './Zoltan'
import Introduction from './Introduction'

const Wrapper = styled('div')`
  ${fuzzyBackground};
  margin-top: 2rem;
  @media (min-width: 415px) {
    display: flex;
    align-items: center;
    align-self: center;
    flex-direction: row;
    justify-content: center;
  }

  @media (min-width: 769px) {
    padding: 1rem;
    margin-bottom: 1rem;
  }
`

const Personal = () => {
  return (
    <Wrapper>
      <FlexElement flex={1} order={1}>
        <Zoltan />
      </FlexElement>
      <FlexElement flex={3} order={2}>
        <Introduction />
      </FlexElement>
    </Wrapper>
  )
}

export default Personal
