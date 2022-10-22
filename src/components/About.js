import React from 'react'
import styled from 'styled-components'
import { TitleTab } from '../styled-components/TitleTab'
import { Line } from '../styled-components/Line'
import { Container } from '../styled-components/Container'
import { Title } from '../styled-components/Title'
const Avatar = styled.div`
    height: 350px;
    width: 350px;
    border-radius: 100%;
    background-color: ${props=>props.theme.secondary};
`
const DetailsContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    p{
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        display: flex;
        align-items: center;
        text-align: justify;
        margin: 0;
        color: rgba(255, 255, 255, 0.5);
    }

`
export default function About() {
  return (
    <>
    <Container>
        <Avatar/>
        <DetailsContainer>
            <TitleTab>😀 About Me</TitleTab>
            <Title>Hello, I am Laviz Pandey</Title>
            <p style={{marginBottom:"10px"}}>I am a passionare software developer</p>
            <p>I specialise in building web applications and video games</p>
            <p>I have a strong passion for technology</p>
            <p style={{marginBottom:"10px"}}>I have proven experience with React JS and Unity 3D</p>
            <p>K lekhne k lekhne bhayo haha</p>


        </DetailsContainer>
    </Container>
    <Line/>
    </>
  )
}
