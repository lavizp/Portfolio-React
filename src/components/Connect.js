import React from 'react'
import styled from 'styled-components'
import { TitleTab } from '../styled-components/TitleTab'
import { Title } from '../styled-components/Title'
const Container = styled.div`
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
`
export default function Connect() {
  return (
    <Container>
        <TitleTab>✨ Contact</TitleTab>
        <Title>Lets have a Conversation:</Title>


    </Container>
  )
}
