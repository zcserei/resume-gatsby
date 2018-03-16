import React from 'react'
import styled from 'react-emotion'

import { Highlight, Paragraph, SectionTitle } from '../../_styled'

const Wrapper = styled('div')`
  padding: 1rem;
`

const Introduction = () => {
  return (
    <Wrapper>
      <SectionTitle>&mdash; looking for a new challenge</SectionTitle>
      <Paragraph>I enjoyed the advantages of working mostly remotely and travelling to meet clients in the last few years. However, I started to realize that having the opportunity to turn my chair around and be able to ask a quick question from a likeminded person is something I miss. I am looking for a position where fiddling around with new tech is appreciated, walking the off-beaten path is praised and team effort is recognized.</Paragraph>
    </Wrapper>
  )
}

export default Introduction
