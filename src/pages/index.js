import React from 'react'

import { Container } from '../components/_styled'

import { Education, Experience, Facts, Footer, Header, Introduction, Process, Skills, Tools } from '../components'

const IndexPage = () => (
  <Container>
    <Header />
    <Introduction />
    <Experience />
    <Education />
    <Process />
    <Tools />
    <Skills />
    <Facts />
    <Footer />
  </Container>
)

export default IndexPage
