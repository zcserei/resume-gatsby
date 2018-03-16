import styled from 'react-emotion'

const List = styled('ul')`
  margin: 0;
  padding: 0;
  list-style-type: none;
  width: 100%;
  color: ${props => props.theme.colors.white};

  @media (min-width: 769px) {
    font-size: 1em;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`

export default List
