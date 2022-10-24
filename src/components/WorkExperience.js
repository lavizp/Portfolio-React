import React from 'react'
import { Title } from '../styled-components/Title'
import { TitleTab } from '../styled-components/TitleTab'
import Work from './Work'
import styled from 'styled-components'
import { experienceData } from '../Data/ExperiencesData'

const Container = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  row-gap: 50px;
  flex-wrap: wrap;
    
`

const WorkContainer = styled.div`
  margin: auto;
  width: 90%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
  text-align: center;

    align-items: center;


    
  }
`
export default function WorkExperience() {
  return (
    <>
    <div id="experience"></div>
    <WorkContainer>
        <TitleTab>💼 Experience</TitleTab>
        <Title>Current/ Previous Positions:</Title>
    </WorkContainer>
    <Container>
      {experienceData.map((item)=><Work key= {item.id} company={item.company} date={item.date} position={item.position} roles={item.roles}/>)}

    </Container>
    </>
  )
}
