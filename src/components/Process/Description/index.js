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
      <FlexElement flex={1} order={1} className='offset'/>
      <FlexElement flex={3} order={2}>
        <div>
          <SectionTitle>&mdash; seeing it through</SectionTitle>
          <Paragraph>Having worked in all the various phases of product development, I take pride in understanding the whole process. Whether I need to work in a management or a development role, I reckon understanding the responsibilities of the whole team is an obvious edge.</Paragraph>
        </div>
      </FlexElement>
    </Wrapper>
  )
}

export default Description
