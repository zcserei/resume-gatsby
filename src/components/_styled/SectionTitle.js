import styled from 'react-emotion'

const SectionTitle = styled('h1')`
  color: ${props => props.theme.colors.white};
  font-size: 2rem;
  margin: 0 0 1rem;

  @media (min-width: 769px) {
    font-size: 2.4rem;
  }

  @media (min-width: 1025px) {
    font-size: 2.8rem;
  }
`

export default SectionTitle
