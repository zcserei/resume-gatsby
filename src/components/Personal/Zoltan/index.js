import React from 'react'
import styled from 'react-emotion'

import zoltan from './zoltan.jpg'

const ZoltanImage = styled('img')`
  padding: 1rem;
  margin: 0;
`

const Zoltan = () => {
  return (
    <div>
      <ZoltanImage src={zoltan} />
    </div>
  )
}

export default Zoltan
