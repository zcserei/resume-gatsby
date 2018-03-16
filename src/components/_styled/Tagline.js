import styled from 'react-emotion'

const Tagline = styled('h2')`
  color: ${props => props.theme.colors.mineshaft};
  margin: 1rem 0 0;
  font-size: 1.6rem;
  font-weight: 300;
  line-height: 1.5;

  @media (min-width: 769px) {
    font-size: 2rem;
  }
`

export default Tagline
