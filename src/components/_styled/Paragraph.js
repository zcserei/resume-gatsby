import styled from 'react-emotion'

const Paragraph = styled('p')`
  color: ${props => props.theme.colors.white};
  font-family: 'ibm-plex-serif', serif;
  font-size: 1.2rem;
  line-height: 1.5;
  margin: 0;
  display: block;

  @media (min-width: 1025px) {
    font-size: 1.4rem;
  }
`

export default Paragraph
