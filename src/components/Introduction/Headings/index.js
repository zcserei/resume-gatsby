import React from 'react'
import styled from 'react-emotion'

import theme from '../../../utils/theme'

import { Blink, Tagline } from '../../_styled'

const Wrapper = styled('div')`
  background-color: ${props => props.theme.colors.red_ribbon};
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1rem;
  width: 100%;
  @media (min-width: 415px) {
    margin: 1rem 0 0 1rem;
  }

  @media (min-width: 769px) {
    padding: 2rem;
    margin: 0;
  }
  
`

const BrandHeading = styled('h1')`
  font-size: 3rem;
  font-weight: 600;
  margin: 0;
  padding: 0;
  color: ${theme.colors.white};

  @media (min-width: 769px) {
    font-size: 4rem;
  }
`

const Headings = () => {
  return (
    <Wrapper>
      <BrandHeading>beraten</BrandHeading>
      <BrandHeading>verbinden</BrandHeading>
      <BrandHeading>stärken<Blink>_</Blink></BrandHeading>
      <Tagline>im Verwaltungsrat, bei Geschäftsleitung, Mitarbeitern und im Team</Tagline>
    </Wrapper>
  )
}

export default Headings
