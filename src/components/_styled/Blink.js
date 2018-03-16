import styled from 'react-emotion'
import { keyframes } from 'emotion'

const blink = keyframes`
  from, to {
    color: transparent;
  }
  50% {
    color: inherit;
  }
`

const Blink = styled('span')`
  animation: ${blink} 2s step-end infinite;
  display: inline-block;
`

export default Blink
