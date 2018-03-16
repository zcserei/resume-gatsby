import React from 'react'
import styled from 'react-emotion'

const Name = styled('h1')`
  background-color: ${props => props.theme.colors.red_ribbon};
  font-size: 4rem;
  display: inline-block;
  padding: 1rem;
  margin-bottom: 0;
  margin-top: 0;
  box-sizing: border-box;
`

const Motto = styled('h2')`
  color: ${props => props.theme.colors.white};
  margin: 1rem 0 0 1rem;
  font-size: 1.6rem;
  font-weight: 300;
  line-height: 1.5;

  @media (min-width: 769px) {
    font-size: 2rem;
  }
`

const Wrapper = styled('div')`
  margin-bottom: 2rem;
`

const Header = () => {
  return (
    <Wrapper>
      <Name>Cserei Zoltán</Name>
      <Motto>hacker, hustler, master procrastinator</Motto>
    </Wrapper>
  )
}

export default Header
