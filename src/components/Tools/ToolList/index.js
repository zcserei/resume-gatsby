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

const ToolList = () => {
  return (
    <Wrapper>
      <List>
        <ListItem>
          <Bullet>Languages</Bullet>
          <Details>JavaScript, Python, Go, Ruby, CSS, SCSS, SVG, JSON, YAML</Details>
        </ListItem>
        <ListItem>
          <Bullet>Utilities</Bullet>
          <Details>Lodash, jQuery, D3</Details>
        </ListItem>
        <ListItem>
          <Bullet>Libraries</Bullet>
          <Details>React, Redux, redux-saga, Gatsby, Node, Express, TensorFlow</Details>
        </ListItem>
        <ListItem>
          <Bullet>Testing</Bullet>
          <Details>Mocha, Chai, Jasmine, Karma, Enzyme, Sinon, Selenium, PhantomJS</Details>
        </ListItem>
        <ListItem>
          <Bullet>Version Control</Bullet>
          <Details>Git, SVN, Mercurial</Details>
        </ListItem>
        <ListItem>
          <Bullet>Database</Bullet>
          <Details>MongoDB, PostgreSQL, Redis, MySQL, SQLite</Details>
        </ListItem>
        <ListItem>
          <Bullet>Environment</Bullet>
          <Details>Docker, Vagrant, Firebase, AWS</Details>
        </ListItem>
        <ListItem>
          <Bullet>Agile</Bullet>
          <Details>Jira, MantisBT, Trello, Asana</Details>
        </ListItem>
      </List>
    </Wrapper>
  )
}

export default ToolList
