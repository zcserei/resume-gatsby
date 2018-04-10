import React from 'react'
import styled from 'react-emotion'

import theme from '../../../utils/theme'

const Wrapper = styled('div')`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 1rem 0;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`

const FlexElement = styled('div')`
flex: 1;
margin: 0;
`

const Paragraph = styled('p')`
  background-color: ${theme.colors.shade};
  color: ${theme.colors.white};
  padding: 1rem;
  margin: 1rem;
`

const Subtitle = styled('h2')`
color: ${props => props.theme.colors.white};
margin: 0 1rem 1rem 1rem;
font-size: 1.6rem;
font-weight: 300;
line-height: 1.5;

@media (min-width: 769px) {
  font-size: 2rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
}
`

const Link = styled('a')`
  border-bottom: 1px dashed ${props => props.theme.colors.alto} !important;
  text-decoration: none !important;
  color: ${props => props.theme.colors.alto} !important;

  &:hover {
    border-bottom-color: ${props => props.theme.colors.mineshaft} !important;
    color: ${props => props.theme.colors.mineshaft} !important;
  }
`
const Bottom = () => {
  return (
    <Wrapper>
      <FlexElement>
        <Subtitle>Personal</Subtitle>
        <Paragraph>Cserei Zoltán</Paragraph>
        <Paragraph>London W9 1NZ</Paragraph>
        <Paragraph>Mobile: <Link href='tel:0040740489499'>+40-740-489-499</Link></Paragraph>
        <Paragraph>E-mail: <Link href='mailto:z@holist.io'>z@holist.io</Link></Paragraph>
      </FlexElement>
      <FlexElement>
        <Subtitle>Across social media</Subtitle>
        <Paragraph><Link href='https://www.twitter.com/zcserei'>Twitter</Link></Paragraph>
        <Paragraph><Link href='https://www.facebook.com/zcserei'>Facebook</Link></Paragraph>
        <Paragraph><Link href='https://www.linkedin.com/in/zcserei'>LinkedIn</Link></Paragraph>
        <Paragraph><Link href='https://github.com/zcserei/'>Personal GitHub</Link></Paragraph>
        <Paragraph><Link href='https://github.com/Holistio'>Organization GitHub</Link></Paragraph>
        <Paragraph><Link href='https://stackoverflow.com/users/2261952/zcserei'>StackOverflow</Link></Paragraph>
      </FlexElement>
    </Wrapper>
  )
}

export default Bottom
