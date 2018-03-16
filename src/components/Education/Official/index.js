import React from 'react'
import styled from 'react-emotion'

import { Description, List, ListItem, Organization, Period, Position } from '../../_styled'

const Wrapper = styled('div')`
  padding: 0;
  width: 100%;
  ul {
    li {
      &:last-child {
        margin-bottom: 1rem;
      }
    }
  }

  @media (min-width: 415px) {
    margin: 0 1rem;
  }

  @media (min-width: 769px) {
    margin: 0;
    ul {
      justify-content: start;
      li {
        margin: 1rem;
        width: calc((100% / 3) - 2rem);
      }
    }
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

const Institutions = () => {
  return (
    <Wrapper>
      <Subtitle>Institutions</Subtitle>
      <List>
        <ListItem>
          <Period>2011 &mdash; 2014</Period>
          <Organization>Budapest University of Technology and Economics</Organization>
          <Position>Electrical Engineering, Computer Engineering &mdash; BA</Position>
          <Description>I attended two bachelor degrees at Budapest University of Technology and Economics at the faculty of electrical engineering and information technology. As I have decided to found my own company, I have dropped out.</Description>
        </ListItem>
        <ListItem>
          <Period>2007 &mdash; 2011</Period>
          <Organization>Nagy Mózes High School</Organization>
          <Position>Specialisation in biochemistry and foreign languages</Position>
          <Description>During my school years, I have participated in various national and international competitions. Subjects I have competed in with great results include physics, chemistry, biology, mathematics, Romanian literature and sociology (international conference grand prize). During my last two years of high school, I have been the president of the city youth council.</Description>
        </ListItem>
      </List>
    </Wrapper>
  )
}

export default Institutions
