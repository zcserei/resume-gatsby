import React from 'react'
import styled from 'react-emotion'

import { Description, List, ListItem, Organization, Period } from '../../_styled'

const Wrapper = styled('div')`
  padding: 0;
  width: 100%;
  margin-bottom: 2rem;

  @media (min-width: 415px) {
      margin: 0 1rem 2rem 1rem;
    }

  @media (min-width: 769px) {
    margin: 0 0 3rem 0;
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
      <Subtitle>Extracurricular activities</Subtitle>
      <List>
        <ListItem>
          <Period>2013 &mdash; 2014</Period>
          <Organization>BME College of Advanced Studies in Management</Organization>
          <Description>I have attended various courses and events in the field of management, also taking part in the management of the organization itself.</Description>
        </ListItem>
        <ListItem>
          <Period>2013 &mdash; 2014</Period>
          <Organization>Mathias Corvinus Collegium</Organization>
          <Description>“Bonus intra, melior exi” is MCC’s official motto, which translates to “come good, leave better”. This succinct sentence is the guiding philosophy of the Collegium: only the best and brightest may and should have the opportunity to enter the college, in order to leave it as cultured and useful citizens. I have attended courses on negotiation, debate, logic and Chinese language at the Collegium.</Description>
        </ListItem>
        <ListItem>
          <Period>2011 &mdash; 2014</Period>
          <Organization>Bolyai Self-Study Workshop</Organization>
          <Description>I have attended the monthly events of the Bolyai Workshop where we studied different literary and cinematographical pieces of art. My experience and studies here have served as the basis when founding Neoforum Association, mentioned above.</Description>
        </ListItem>
      </List>
    </Wrapper>
  )
}

export default Institutions
