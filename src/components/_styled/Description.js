import styled from 'react-emotion'

const Description = styled('p')`
  color: ${props => props.theme.colors.white};
  font-family: 'ibm-plex-serif', serif;
  font-size: 1rem;
  line-height: 1.5;
  margin: 0;

  @media (min-width: 1025px) {
    font-size: 1.1rem;
  }
`

export default Description
