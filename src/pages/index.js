import React from 'react'

import { Container } from '../components/_styled'

import { Education, Experience, Factsheet, Footer, Header, Introduction, Personal, Process, Skills, Tools } from '../components'

const IndexPage = () => (
  <Container>
    <Header />
    <Introduction />
    <Factsheet />
    <Personal />
    <Experience />
    <Education />
    <Process />
    <Tools />
    <Skills />
    <Footer />
  </Container>
)

export default IndexPage
