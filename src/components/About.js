import React from 'react'
import styled from 'styled-components'
import { TitleTab } from '../styled-components/TitleTab'
import { Line } from '../styled-components/Line'
const HomeContainer = styled.div`
    width: 90%;
    margin: auto;
    margin-top: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

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

    h1{
        color: white;
        font-weight: 800;
        font-size: 52px;
        line-height: 61px;
        margin: 17px 0;

    }
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
    <HomeContainer>
        <Avatar/>
        <DetailsContainer>
            <TitleTab>😀 About Me</TitleTab>
            <h1>Hello, I am Laviz Pandey</h1>
            <p style={{marginBottom:"10px"}}>I am a passionare software developer</p>
            <p>I specialise in building web applications and video games</p>
            <p>I have a strong passion for technology</p>
            <p style={{marginBottom:"10px"}}>I have proven experience with React JS and Unity 3D</p>
            <p>K lekhne k lekhne bhayo haha</p>


        </DetailsContainer>
    </HomeContainer>
    <Line/>
    </>
  )
}
