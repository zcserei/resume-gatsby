import React from 'react'
import styled from 'react-emotion'

import { fuzzyBackground } from '../../_css'
import { Highlight, Paragraph, Signature } from '../../_styled'

const Wrapper = styled('div')`
  ${fuzzyBackground};
  padding: 1em;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 769px) {
    padding: 2em;
    margin: 2em 2em 0 0;
  }
`

const Greeting = () => {
  return (
    <Wrapper>
      <Paragraph css={`
        text-indent: 5%;
      `}>Als Pragmatiker ist mein Interesse und Engagement die Menschen zu verstehen und organisch gemeinsam von Grund auf erfolgreich zu werden. Dies habe ich selbst umgesetzt und gründete im Jahre 1996 eine Firma in der Lüftungshygiene, welche ich innert 10 Jahren mit einer erfolgreichen Firmenkultur zum Markleader mit über 50 Mitarbeitern aufgebaut habe. Diese konnte ich im Zuge der Nachfolgeregelung im Jahre 2009 an Walter Meier AG erfolgreich verkaufen.</Paragraph>
      <Paragraph css={`
        text-indent: 5%;
      `}>Seitdem befasse ich mich noch Intensiver mit der Förderung der Menschen, Firmen und Organisationen und selbstverständlich auch für eine gesunde Raumluft, mit der Plattform „<Highlight>MeineRaumluft.ch</Highlight>“ wo wir die grösste Raumluftmessaktion in D+F durchführen, inkl. Bürogebäude.</Paragraph>
      <Paragraph css={`
        text-indent: 5%;
      `}>Gerne gebe ich meine Erfahrungen als Geschäftsleitungsmitglied, Unternehmer, Verwaltungsrat, Berater, Mentor, Vereinspräsident und Plattformleiter, Ihrem Unternehmen weiter. Gemeinsam können wir das vorhandene Potential ihres Unternehmens erfolgreich weiterentwickeln. Dafür stehe ich mit meinem Namen ein.</Paragraph>
      <Signature>&mdash; Ihr Harry Tischhauser</Signature>
    </Wrapper>
  )
}

export default Greeting

