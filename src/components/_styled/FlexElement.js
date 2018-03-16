import styled from 'react-emotion'

const FlexElement = styled('div')`
  display: flex;
  flex: 1;
  order: ${props => props.order}

  @media (min-width: 415px) {
    order: 0;
  }

  @media (min-width: 769px) {
    flex: ${props => props.flex};
  }
`

export default FlexElement
