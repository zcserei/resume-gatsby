import React from 'react'
import styled from 'react-emotion'

import { fuzzyBackground } from '../../_css'
import { FlexElement, Paragraph, SectionTitle } from '../../_styled'

const Wrapper = styled('div')`
  ${fuzzyBackground};
  display: flex;
  padding: 1rem;
  width: 100%;
  .offset {
    display: none;
  }

  @media (min-width: 415px) {
    
    align-items: center;
    align-self: center;
    flex-direction: row;
    justify-content: center;
  }

  @media (min-width: 769px) {
    padding: 2rem;
    .offset {
      display: flex;
    }
  }
`

const Description = () => {
  return (
    <Wrapper>
      <FlexElement flex={1} order={1} className='offset' />
      <FlexElement flex={3} order={2}>
        <div>
          <SectionTitle>&mdash; tools of my trade</SectionTitle>
          <Paragraph>I remember two revelations in my career as a developer. The first was Ruby on Rails, back in 2007: I now know that the MVC pattern has been around for decades, but the way Rails brought it to the web world made me feel like it is “the way to go”. Then, after years of playing around with various JavaScript tools, I felt like we are not really there yet. Then came React: I once again think that we have a tool for doing things the proper way and I have been an evangelist ever since I have been using it.</Paragraph>
        </div>
      </FlexElement>
    </Wrapper>
  )
}

export default Description
