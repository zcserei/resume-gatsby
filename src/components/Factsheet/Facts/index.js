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

const Facts = () => {
  return (
    <Wrapper>
      <List>
        <ListItem>
          <Bullet>50</Bullet>
          <Details>I hitchhiked a 50 year old soviet truck in rural Armenia</Details>
        </ListItem>
        <ListItem>
          <Bullet>14</Bullet>
          <Details>when I was 14 I interviewed Wordpress founder Matt Mullenweg</Details>
        </ListItem>
        <ListItem>
          <Bullet>1M</Bullet>
          <Details>my teenage blog about reviewing Linux distributions passed a million pageviews</Details>
        </ListItem>
        <ListItem>
          <Bullet>05</Bullet>
          <Details>when I was 5 I signed up to be a paperboy and started earning my own $$$</Details>
        </ListItem>
        <ListItem>
          <Bullet>03</Bullet>
          <Details>three years ago I dropped out and started my own software company</Details>
        </ListItem>
        <ListItem>
          <Bullet>09</Bullet>
          <Details>I have worked with clients from 9 different countries</Details>
        </ListItem>
        <ListItem>
          <Bullet>11</Bullet>
          <Details>I have participated in national or international competitions in 11 different school subjects</Details>
        </ListItem>
        <ListItem>
          <Bullet>3K</Bullet>
          <Details>I once wrote a rage post about a social issue that got shared more than 3000 times</Details>
        </ListItem>
      </List>
    </Wrapper>
  )
}

export default Facts
