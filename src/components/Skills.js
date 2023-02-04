import React from 'react'
import styled from 'styled-components'
import { TitleTab } from '../styled-components/TitleTab'
import { Title } from '../styled-components/Title'
import {AiFillHtml5} from 'react-icons/ai'
import {FaCss3Alt} from 'react-icons/fa'
import {FaReact} from 'react-icons/fa'
import {SiJavascript} from 'react-icons/si'
import {AiFillGithub} from 'react-icons/ai'
import {SiUnity} from 'react-icons/si'
import {TbCSharp} from 'react-icons/tb'
import {FaNode} from 'react-icons/fa'
import {DiMongodb} from 'react-icons/di'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
    margin: auto;
    margin-top: 100px;
`

const SkillsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
`
export default function Skills() {
  return (
    <Container>
        <TitleTab>🤵 Skills</TitleTab>
        <Title>My Tech Stack:</Title>
        <SkillsContainer>
            <AiFillHtml5 color="rgba(123, 74, 226, 0.5)" size={80}/>
            <FaCss3Alt color="rgba(123, 74, 226, 0.5)" size={80}/>
            <SiJavascript color="rgba(123, 74, 226, 0.5)" size={70}/>
            <FaReact color="rgba(123, 74, 226, 0.5)" size={80}/>
            <FaNode color="rgba(123, 74, 226, 0.5)" size={80}/>
            <DiMongodb color="rgba(123, 74, 226, 0.5)" size={80}/>
            <AiFillGithub color="rgba(123, 74, 226, 0.5)" size={80}/>
            <TbCSharp color="rgba(123, 74, 226, 0.5)" size={80}/>
            <SiUnity color="rgba(123, 74, 226, 0.5)" size={80}/>

        </SkillsContainer>
    </Container>
  )
}
