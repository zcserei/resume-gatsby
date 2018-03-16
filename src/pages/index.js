import React from 'react'

import { Container } from '../components/_styled'

import { Education, Experience, Facts, Footer, Header, Process, Skills, Tools } from '../components'

const IndexPage = () => (
  <Container>
    <Header />
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
