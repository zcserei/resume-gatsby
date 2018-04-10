import React from 'react'
import styled from 'react-emotion'

const Name = styled('h1')`
  background-color: ${props => props.theme.colors.red_ribbon};
  font-size: 3rem;
  width: 100%;
  display: inline-block;
  padding: 1rem;
  margin-bottom: 0;
  margin-top: 0;
  box-sizing: border-box;

  @media (min-width: 759px) {
    width: auto;
  }
`

const Motto = styled('h2')`
  color: ${props => props.theme.colors.red_ribbon};
  margin: 1rem 0 0 1rem;
  font-size: 1.6rem;
  font-weight: 300;

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
      <Motto>full stack JavaScript developer based in London</Motto>
    </Wrapper>
  )
}

export default Header
