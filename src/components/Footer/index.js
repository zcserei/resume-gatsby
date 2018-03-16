import React from 'react'
import styled from 'react-emotion'

import { FlexContainer } from '../_styled'

import Top from './Top'
import Bottom from './Bottom'

const Wrapper = styled('div')`
  margin: 0 -1rem -1rem -1rem;
  padding: 1rem 0 0 0;
  min-height: calc(100vh - 2rem);
  background-color: ${props => props.theme.colors.red_ribbon};
  width: calc(100% + 2rem);

  @media (min-width: 769px) {
    margin: 0 -2rem -2rem -2rem;
    min-height: calc(100vh - 1rem);
    width: calc(100% + 4rem);
  }
`

const Footer = () => {
  return (
    <Wrapper>
      <FlexContainer>
        <Top />
      </FlexContainer>
      <FlexContainer>
        <Bottom />
      </FlexContainer>
    </Wrapper>
  )
}

export default Footer
