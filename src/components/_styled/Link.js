import styled from 'react-emotion'

const Link = styled('a')`
  border-bottom: 1px dashed ${props => props.theme.colors.alto} !important;
  text-decoration: none !important;
  color: ${props => props.theme.colors.alto} !important;

  &:hover {
    border-bottom-color: ${props => props.theme.colors.red_ribbon} !important;
    color: ${props => props.theme.colors.red_ribbon} !important;
  }
`

export default Link
