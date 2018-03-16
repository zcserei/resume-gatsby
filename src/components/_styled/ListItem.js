import styled from 'react-emotion'

const ListItem = styled('li')`
  margin-bottom: 1rem;
  padding: .7rem .7rem .7rem 0;
  background-color: ${props => props.theme.colors.shade};
  width: 100%;
  padding: 1rem;
`

export default ListItem
