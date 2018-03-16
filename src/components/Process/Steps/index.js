import React from 'react'
import styled from 'react-emotion'

import { Paragraph } from '../../_styled'

const Wrapper = styled('div')`
  width: 100%;

  margin-bottom: 2rem;
  @media (min-width: 415px) {
    margin: 0 1rem 2rem 1rem;
  }

  @media (min-width: 769px) {
    margin-top: 1rem;
  }

  @media (min-width: 1025px) {
    margin: 1rem 0 3rem 0;
  }
`

const List = styled('ul')`
  margin: 0;
  padding: 0;
  list-style-type: none;
  width: 100%;
  color: ${props => props.theme.colors.white};

  @media (min-width: 1025px) {
    font-size: 1em;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`

const ListItem = styled('li')`
  background-color: ${props => props.theme.colors.shade};
  margin: 1rem 0;
  padding: 1rem;
  flex: 1;
  display: flex;
  width: 100%;

  @media (min-width: 1025px) {
    width: ((100% / 4) - 2rem);
    margin: 1rem;
  }
`

const Description = styled('div')`
  color: ${props => props.theme.colors.white};
  margin: 0;
  font-size: 1.2rem;
  line-height: 1.5;
  font-weight: 300;

  @media (min-width: 769px) {
    font-size: 1.4rem;
  }
`

const Count = styled('div')`
  color: ${props => props.theme.colors.red_ribbon};
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.5;
  margin-right: 1rem;
`

const Introduction = () => {
  return (
    <Wrapper>
      <List>
        <ListItem>
          <Count>1.</Count>
          <Description>Imagine</Description>
          <Paragraph>Ideas come and go: finding proper solutions and understanding what it takes to make the feasible is not always obvious. I am always willing to take part in the process of planning.</Paragraph>
        </ListItem>
        <ListItem>
          <Count>2.</Count>
          <Description>See</Description>
          <Paragraph>I have worked in various branding and experience design processes. My belief is that it is always the information that we want to share that needs to be in focus, once that is figured out, the rest almost handles itself.</Paragraph>
        </ListItem>
        <ListItem>
          <Count>3.</Count>
          <Description>Breathe</Description>
          <Paragraph>The fun part: above all else, I love when after f$#@loads of cursing something finally starts to take shape. I get my high on killing them bugs.</Paragraph>
        </ListItem>
        <ListItem>
          <Count>4.</Count>
          <Description>Move</Description>
          <Paragraph>Without communicating and reaching out to users and various audiences the whole process can often become useless: finding how to emit valuable signals in the ocean of noise is a challenge in itself.</Paragraph>
        </ListItem>
      </List>
    </Wrapper>
  )
}

export default Introduction
