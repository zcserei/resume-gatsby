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

const Pre = styled('pre')`
  display: inline;
`

const Contributions = () => {
  return (
    <Wrapper>
      <Subtitle>Associations, side gigs, random initiatives</Subtitle>
      <List>
        <ListItem>
          <Period>2016 &mdash; 2014</Period>
          <Organization>Holistio Impact</Organization>
          <Description>I launched a charity campaign where we selected organizations and initiatives deemed worthy of wider attention and we created free websites for them.</Description>
        </ListItem>
        <ListItem>
          <Period>2015 &mdash; <em>today</em></Period>
          <Organization>Open Source</Organization>
          <Description>I have been contributing to various open source projects with tiny patches for a while. I am very proud that I have finally released my first very own, albeit very tiny package. I have been using <Pre>styled-components</Pre> for styling React components for a while, but when I noticed that <Pre>emotion</Pre> has a logo resembling David Bowie I knew there was no turning back. I came up with a tiny package called <Pre>gatsby-emotional-starter</Pre> that makes starting Gatsby projects using <Pre>emotion</Pre> a lot faster.</Description>
        </ListItem>
      </List>
    </Wrapper>
  )
}

export default Contributions
