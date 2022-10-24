import React from 'react'
import styled from 'styled-components'
import { TitleTab } from '../styled-components/TitleTab'
import { Title } from '../styled-components/Title'
import { projectsData } from '../Data/ProjetcsData'
import ProjectTab from './ProjectTab'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 17px;
    width: 90%;
    margin: auto;
    @media (max-width: 768px) {
        width: 80%;
        margin-top: 30px;
        align-items: center;

    
  }

`

const ProjectContainer = styled.div`
  margin: auto;
  width: 90%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    align-items: center;


    
  }
`
export default function Projecsts() {
  return (
    <>
    <div id="projects"></div>
      <ProjectContainer>
        <TitleTab>💎 Portfolio</TitleTab>
        <Title>My Projects:</Title>
        </ProjectContainer>
    <Container>
      {projectsData.map((item, index)=> <ProjectTab key = {index} dark={index/1 === 1? "":"new"}title={item.title} shortDescription = {item.shortdescription} image={item.image} github={item.github} link={item.link}/>)}

    </Container>
    <a href='/wo' style={{display:"flex", justifyContent:"flex-end", marginRight:"80px",marginTop:"30px", textDecoration:"none", color:" rgba(123, 74, 226, 0.5)"}}>View More On Github</a>

    </>
  )
}
