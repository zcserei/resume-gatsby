import React from 'react'
import styled from 'react-emotion'

import { fuzzyBackground } from '../../_css'
import { Highlight, Paragraph, Signature } from '../../_styled'

const Wrapper = styled('div')`
  ${fuzzyBackground};
  padding: 1em;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 769px) {
    padding: 2em;
    margin: 2em 2em 0 0;
  }
`

const Greeting = () => {
  return (
    <Wrapper>
      <Paragraph css={`
        text-indent: 5%;
      `}>“You can’t connect the dots looking forward” &mdash; well before I heard Steve Jobs’ now iconic commencement speech at Stanford, these thoughts resonated with me. All I knew was that I wanted to collect dots and build graphs out of them in my head, so starting from my earliest school years, I signed up for all the possible competitions in all the subjects. My fondest memories are when I could finally grasp an edge on these graphs that I drew in my head. My attitude has been the same ever since: wander around looking for connections between first principles and marvel at their interconnectedness. </Paragraph>
      <Paragraph css={`
        text-indent: 5%;
      `}>My first encounter with programming was when I was in fifth grade: a student newspaper published a very basic HTML course and while I did and sometimes still do consider myself being closer to humanities, but the possibility of having a tool this powerful at my hands for expressing my ideas swept me in and I’ve been looking for new ways to turn ideas into code and code into ideas ever since in the last 14 years.</Paragraph>
      <Paragraph css={`
        text-indent: 5%;
      `}>I am looking forward to sharing my experiences with you!</Paragraph>
      <Signature>&mdash; Cserei Zoltán</Signature>
    </Wrapper>
  )
}

export default Greeting

