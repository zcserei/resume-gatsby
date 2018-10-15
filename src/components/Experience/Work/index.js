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
  margin: 1rem;
  font-size: 1.6rem;
  font-weight: 300;
  line-height: 1.5;

  @media (min-width: 737px) {
    margin-left: 2rem;
  }

  @media (min-width: 769px) {
    font-size: 2.4rem;
  }
`

const Experience = () => {
  return (
    <Wrapper>
      <Subtitle>Work experience</Subtitle>
      <List>
        <ListItem>
          <Period>april 2014 &mdash; october 2014</Period>
          <Organization>Bizzby</Organization>
          <Position>Senior Software Engineer</Position>
          <Description>Bizzby is a marketplace connecting customers to various services including smart device installations, plumbing or cleaning. My primary activity revolved around building a new interface for the web and mobile apps used by the service providers and business administrators.</Description>
        </ListItem>
        <ListItem>
          <Period>2014 &mdash; <em>today</em></Period>
          <Organization>Holistio</Organization>
          <Position>Founder &amp; CEO</Position>
          <Description>Holistio is a remote digital agency I founded and headed in the last 4 years. We offered a range of services mainly focusing on web application development and experience design. Our size constraints came with advantages: working with small and medium-sized businesses we had the opportunity to fully undestand their needs, always talk directly with upper management and work under the pressure of knowing that whatever we do can easily be classified as “mission critical”. We had the honour to work with dozens of clients from 9 different countries.</Description>
        </ListItem>
        <ListItem>
          <Period>2016 &mdash; <em>today</em></Period>
          <Organization>Agrocket</Organization>
          <Position>Founder &amp; CEO</Position>
          <Description>Agrocket is an IoT startup focused on improving the yield of crops in large scale agriculture by analyzing field data and crunching it through machine learning systems. I am responsible for coordinating the venture and building the API clients for the service. Agrocket is planned to launch Q4 2018.</Description>
        </ListItem>
        <ListItem>
          <Period>2018 &mdash; <em>today</em></Period>
          <Organization>Moonka.space</Organization>
          <Position>Founder &amp; CEO</Position>
          <Description>Moonka started out as a pun on the Hungarian word for work: “munka”. Our tiny team of two is working hard to solve a problem that is less technical, rather communicational: how we can build a platform for job seekers in digital fields where we can forego the usual clichés regarding “dynamic teams” and “competitive salary packages” and focus on what the actual problems the candidates will have to solve are and how they can develop in their new roles.</Description>
        </ListItem>
        <ListItem>
          <Period>2015 &mdash; 2016</Period>
          <Organization>Gnome Design</Organization>
          <Position>Frontend Developer</Position>
          <Description>I worked on the web client of a Java API for a service intended to help companies manage their employees. We started out with React, but after a decision deeming React yet too immature we reverted to using jQuery.</Description>
        </ListItem>
        <ListItem>
          <Period>2013 &mdash; 2014</Period>
          <Organization>BME College for Advanced Studies in Management</Organization>
          <Position>Project Lead</Position>
          <Description>I was elected to lead a team of eight in order to bring into fruition an educational camp focused on early stage startup validation.</Description>
        </ListItem>
      </List>
    </Wrapper>
  )
}

export default Experience
