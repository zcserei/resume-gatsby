import React from 'react'
import styled from 'react-emotion'

import { fuzzyBackground } from '../../_css'
import { Highlight, Paragraph, Signature } from '../../_styled'

const Wrapper = styled('div')`
  ${fuzzyBackground};
  padding: 1em;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 769px) {
    padding: 2em;
    margin: 2rem 2rem 2rem 0;
  }
`

const Greeting = () => {
  return (
    <Wrapper>
      <Paragraph css={`
        text-indent: 5%;
        margin-bottom: .5rem;
      `}>“You can’t connect the dots looking forward” &mdash; well before I heard Steve Jobs’ now iconic commencement speech at Stanford, these thoughts resonated with me. All I knew was that I wanted to collect dots and build graphs out of them in my head, so starting from my earliest school years, I signed up for all the possible competitions in all the subjects. My fondest memories are when I could finally grasp an edge on these graphs that I drew in my head. My attitude has been the same ever since: wander around looking for connections between first principles and marvel at their interconnectedness. </Paragraph>
      <Paragraph css={`
        text-indent: 5%;
        margin-bottom: .5rem;
      `}>My first encounter with programming was when I was in fifth grade: a student newspaper published a very basic HTML course. While I did and sometimes still do consider myself being closer to humanities, the possibility of having a tool this powerful at my hands for expressing my ideas swept me in. I’ve been looking for new ways to turn ideas into code and code into ideas ever since in the last 14 years.</Paragraph>
      <Paragraph css={`
        text-indent: 5%;
      `}>I am looking forward to sharing my experiences with you!</Paragraph>
      <Signature>&mdash; Cserei Zoltán</Signature>
    </Wrapper>
  )
}

export default Greeting

