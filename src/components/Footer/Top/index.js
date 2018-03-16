import React from 'react'
import styled from 'react-emotion'

import { fuzzyBackground } from '../../_css'
import { FlexElement, Paragraph, SectionTitle } from '../../_styled'

const Wrapper = styled('div')`
  ${fuzzyBackground};
  display: flex;
  padding: 1rem;
  width: 100%;
  margin: 0 1rem;
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
    .offset {
      display: flex;
    }
    padding: 2rem;
    margin-top: 1rem;
  }
`

const Top = () => {
  return (
    <Wrapper>
      <FlexElement flex={1} order={1} className='offset' />
      <FlexElement flex={3} order={2}>
        <div>
          <SectionTitle>&mdash; getting in touch</SectionTitle>
          <Paragraph>I am looking forward to hearing from you. I am available for test work and upon request I can also share previous example code, however, most of my work is currently found in private repositories.</Paragraph>
        </div>
      </FlexElement>
    </Wrapper>
  )
}

export default Top
