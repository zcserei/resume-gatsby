import React from 'react'
import styled from 'react-emotion'

import { List } from '../../_styled'

import theme from '../../../utils/theme'

const Wrapper = styled('div')`
  width: 100%;
  @media (min-width: 769px) {
    margin: 1rem 0;
  }
`
const ListItem = styled('li')`
  display: flex;
  background-color: rgba(255, 255, 255, 0.05);
  margin: 1rem 0;
  padding: .5rem;
  border-left: .25rem solid ${theme.colors.red_ribbon};

  @media (min-width: 415px) {
    margin: 1rem;
  }

  @media (min-width: 737px) {
    padding: 0;
    border: none;
  }

  @media (min-width: 769px) {
    width: calc(50% - 2rem);
  }
`

const Bullet = styled('div')`
  color: ${theme.colors.red_ribbon};
  font-weight: 600;
  padding-right: .5em;
  @media (min-width: 737px) {
    background-color: ${theme.colors.red_ribbon};
    padding: 1em;
    color: ${theme.colors.white};
  }
`

const Details = styled('div')`
@media (min-width: 737px) { 
  padding: 1em;
}
`

const Subtitle = styled('h2')`
  color: ${props => props.theme.colors.white};
  margin: 0 1rem 1rem 1rem;
  margin-bottom: 1rem;
  font-size: 1.6rem;
  font-weight: 300;
  line-height: 1.5;

  @media (min-width: 737px) {
    margin-left: 2rem;
    margin-top: 1rem;
  }

  @media (min-width: 769px) {
    font-size: 2rem;
  }
`

const Languages = () => {
  return (
    <Wrapper>
      <Subtitle>Languages</Subtitle>
      <List>
        <ListItem>
          <Bullet>HU</Bullet>
          <Details>Hungarian is my native language</Details>
        </ListItem>
        <ListItem>
          <Bullet>RO</Bullet>
          <Details>I was born in Romania and I speak the language fluently, I hold a C1 level certificate</Details>
        </ListItem>
        <ListItem>
          <Bullet>EN</Bullet>
          <Details>I hold a Cambridge Certificate of Proficiency in English</Details>
        </ListItem>
        <ListItem>
          <Bullet>DE</Bullet>
          <Details>I can communicate with German-speaking clients without issues</Details>
        </ListItem>
      </List>
    </Wrapper>
  )
}

export default Languages
