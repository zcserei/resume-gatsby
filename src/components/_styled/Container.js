import styled from 'react-emotion'

const Container = styled('div')`
  padding: 1rem;
  background-color: ${props => props.theme.colors.mineshaft};
  overflow: scroll;

  @media (min-width: 737px) {
    padding: 1.5rem 1rem;
  }

  @media (min-width: 769px) {
    padding: 3rem 2rem;
  }
`

export default Container
