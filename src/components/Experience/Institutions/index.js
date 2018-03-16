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
    font-size: 2.4rem;
  }
`

const Institutions = () => {
  return (
    <Wrapper>
      <Subtitle>Associations, side gigs, random initiatives</Subtitle>
      <List>
        <ListItem>
          <Period>2012 &mdash; 2014</Period>
          <Organization>Neoforum Association</Organization>
          <Position>Founding President</Position>
          <Description>I gathered a group of talented high schoolers in my hometown, who would attend monthly workshops about curated pairs of literary and cinematographical pieces of art. I also supported their initiatives to organize various events, including a poetry night featuring nine poets from Romania and Hungary.</Description>
        </ListItem>
        <ListItem>
          <Period>2013 &mdash; 2015</Period>
          <Organization>Hejjesen</Organization>
          <Position>Founder</Position>
          <Description>I initiated a platform dedicated to raising awareness about common Hungarian grammatical, orthographical and spelling errors. The initiative reached a follower count of more than 9000 and reached more than 200000 people.</Description>
        </ListItem>
        <ListItem>
          <Period>2014 &mdash; 2016</Period>
          <Organization>Verselő</Organization>
          <Position>Founder &amp; Project Lead</Position>
          <Description>After realizing that I almost lost my handwriting, I initiated a platform where poetry lovers would send in handwritten parts of their favorite poems on a daily basis. We also collaborated with contemporary Hungarian poets, whose poems were featured every Sunday.</Description>
        </ListItem>
        <ListItem>
          <Period>2012 &mdash; 2013</Period>
          <Organization>Visit Kézdivásárhely</Organization>
          <Position>Co-Founder</Position>
          <Description>When Facebook launched the timeline feature, we realized that putting the history of our hometown on the timeline might raise some awareness. The idea turned out to be a huge success, we have been featured on local, regional and national media, including a headline saying “Kézdivásárhely is revolutionising Facebook” on the front page of the most read Hungarian online newspaper.</Description>
        </ListItem>
        <ListItem>
          <Period>2012, 2014</Period>
          <Organization>Before I Die</Organization>
          <Position>Co-Initiator</Position>
          <Description>I initiated, organized and built two “Before I Die” walls, one in my hometown of Kézdivásárhely and another in Budapest.</Description>
        </ListItem>
      </List>
    </Wrapper>
  )
}

export default Institutions
