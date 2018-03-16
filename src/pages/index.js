import React from 'react'

import { Container } from '../components/_styled'

import { Education, Experience, Factsheet, Footer, Header, Introduction, Process, Skills, Tools } from '../components'

const IndexPage = () => (
  <Container>
    <Header />
    <Introduction />
    <Factsheet />
    <Experience />
    <Education />
    <Process />
    <Tools />
    <Skills />
    <Footer />
  </Container>
)

export default IndexPage
