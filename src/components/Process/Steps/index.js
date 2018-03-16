import React from 'react'
import styled from 'react-emotion'

import { Description } from '../../_styled'

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

const Header = styled('h3')`
  color: ${props => props.theme.colors.white};
  margin: 0;
  font-size: 1.2rem;
  line-height: 1.5;
  font-weight: 300;
  display: inline;
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
  display: inline;
`

const Column = styled('div')`
  display: flex;
  flex-direction: column;
`

const Top = styled('div')`
  margin-bottom: 1rem;
`

const Introduction = () => {
  return (
    <Wrapper>
      <List>
        <ListItem>
          <Column>
            <Top>
              <Count>1.</Count>
              <Header>Imagine</Header>
            </Top>
            <Description>Ideas come and go: finding proper solutions and understanding what it takes to make the feasible is not always obvious. I am always willing to take part in the process of planning.</Description>
          </Column>
        </ListItem>
        <ListItem>
          <Column>
            <Top>
              <Count>2.</Count>
              <Header>See</Header>
            </Top>
            <Description>I have worked in various branding and experience design processes. My belief is that it is always the information that we want to share that needs to be in focus, once that is figured out, the rest almost handles itself.</Description>
          </Column>
        </ListItem>
        <ListItem>
          <Column>
            <Top>
              <Count>3.</Count>
              <Header>Breathe</Header>
            </Top>
            <Description>The fun part: above all else, I love when after f$#@loads of cursing something finally starts to take shape. I get my high on killing them bugs.</Description>
          </Column>
        </ListItem>
        <ListItem>
          <Column>
            <Top>
              <Count>4.</Count>
              <Header>Move</Header>
            </Top>
            <Description>Without communicating and reaching out to users and various audiences the whole process can often become useless: finding how to emit valuable signals in the ocean of noise is a challenge in itself.</Description>
          </Column>
        </ListItem>
      </List>
    </Wrapper>
  )
}

export default Introduction
