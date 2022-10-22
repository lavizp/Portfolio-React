import React from 'react'
import styled from 'styled-components'
import {TiSocialLinkedinCircular} from 'react-icons/ti'
import {AiFillGithub, AiFillTwitterCircle} from 'react-icons/ai'
import {HiDownload} from 'react-icons/hi'

import { Line } from '../styled-components/Line'
import { TitleTab } from '../styled-components/TitleTab'
import { Container } from '../styled-components/Container'
import { Title } from '../styled-components/Title'
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
    }
`

const Avatar = styled.div`
    height: 350px;
    width: 350px;
    border-radius: 100%;
    background-color: ${props=>props.theme.secondary};
`
const DownloadCV = styled.button`
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
`


export default function Home() {
  return (
    <>
    <Container>
        <NameContainer>
            <TitleTab>👋 Hello!!!</TitleTab>
            <Title>Laviz <br/>Pandey</Title>
            <p>Software Developer . </p>
            <div className='icons'>
                <a href="/linkedin"><TiSocialLinkedinCircular size={38}/></a>
                <a href="/linkedin"><AiFillGithub size={38}/></a>
                <a href="/linkedin"><AiFillTwitterCircle size={38}/></a>
            </div>
        </NameContainer>
        <Avatar>

        </Avatar>
        <DownloadCV><HiDownload size={22} color="rgba(123, 74, 226, 0.5)"/>  Download CV</DownloadCV>
    </Container>
    <Line/>
    </>
  )
}
