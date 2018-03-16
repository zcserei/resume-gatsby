import React from 'react'

import { Container } from '../components/_styled'

import { Education, Experience, Factsheet, Footer, Header, Introduction, Personal, Process, Tools } from '../components'

export class IndexPage extends React.Component {
  componentDidMount () {
    console.log('Hire me, I am nice.')
  }

  render () {
    return (
      <Container>
        <Header />
        <Introduction />
        <Factsheet />
        <Personal />
        <Experience />
        <Education />
        <Process />
        <Tools />
        <Footer />
      </Container>
    )
  }
}

export default IndexPage
