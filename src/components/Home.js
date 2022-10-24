import React from 'react'
import styled from 'styled-components'
import {TiSocialLinkedinCircular} from 'react-icons/ti'
import {AiFillGithub, AiFillTwitterCircle} from 'react-icons/ai'
import {HiDownload} from 'react-icons/hi'
import Resume from '../assets/LavizPandeyCV.pdf'
import { Line } from '../styled-components/Line'
import { TitleTab } from '../styled-components/TitleTab'
import { Container } from '../styled-components/Container'
import { Title } from '../styled-components/Title'
import LavizAvarar from "../assets/Avatar.JPG"
const NameContainer = styled.div`
    display: flex;
    flex-direction: column;

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
    .icons{
        margin-top: 20px;
        display: flex;
        gap: 10px;
        a{
            text-decoration: none;
            color: white;
        }
        @media (max-width: 768px) {
            position: absolute;
            top:30px;
            gap: 30px;
        }     
    }
    @media (max-width: 768px) {
    order: 1;
    margin-top: 50px;
  }
`

const Avatar = styled.img`
    height: 350px;
    width: 350px;
    border-radius: 100%;
    background-color: ${props=>props.theme.secondary};
    object-fit: cover;
    @media (max-width: 768px) {
    order: 0;
    margin-top: 30px;
    
  }
`
const DownloadCV = styled.a`
    background: none;
    border: 1px solid rgba(123, 74, 226, 0.5);
    border-radius: 16px;
    padding: 10px 10px;
    color: rgba(123, 74, 226, 0.5);
    text-align: center ;
    display: flex;
    align-items: center;
    font-weight: 600;
     font-size: 16px;
    line-height: 19px;
    text-decoration: none;
    @media (max-width: 768px) {
    order: 3;
    margin-top: 50px;

  }
`


export default function Home() {
  return (
    <>
    <div id="home"></div>
    <Container>
        <NameContainer>
            <TitleTab>👋 Hello!!!</TitleTab>
            <Title>Laviz <br/>Pandey</Title>
            <p>Software Developer . </p>
            <div className='icons'>
                <a href="https://www.linkedin.com/in/laviz-pandey-4b8b55208/" target="blank"><TiSocialLinkedinCircular size={38}/></a>
                <a href="https://github.com/lavizp" target="blank"><AiFillGithub size={38}/></a>
                <a href="https://twitter.com/lavizpandey" target="blank"><AiFillTwitterCircle size={38}/></a>
            </div>
        </NameContainer>
        <Avatar src={LavizAvarar}/>

        <DownloadCV href={Resume} target="_blank"><HiDownload size={22} color="rgba(123, 74, 226, 0.5)"/>  Download CV</DownloadCV>
    </Container>
    <Line/>
    </>
  )
}
