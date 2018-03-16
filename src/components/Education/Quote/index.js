import React from 'react'
import styled from 'react-emotion'

import { fuzzyBackground } from '../../_css'
import { FlexElement, Paragraph, SectionTitle } from '../../_styled'

const Wrapper = styled('div')`
  ${fuzzyBackground};
  display: flex;
  padding: 1rem;

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
          <SectionTitle>&mdash; education</SectionTitle>
          <Paragraph>I consider myself extremely lucky for having had the opportunity to learn from some of the greatest minds of my homeland. However, my manifesto regarding my education has obviously been inspired by Mark Twain: “I have never let my schooling interfere with my education” </Paragraph>
        </div>
      </FlexElement>
    </Wrapper>
  )
}

export default Description
