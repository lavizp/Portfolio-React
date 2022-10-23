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
  justify-content: space-between;
  row-gap: 50px;
  flex-wrap: wrap;
`
export default function WorkExperience() {
  return (
    <>
    <div style={{margin: "auto",width:"90%", marginTop:"100px"}}>
        <TitleTab>💼 Experience</TitleTab>
        <Title>Current/ Previous Positions:</Title>
    </div>
    <Container>
      {experienceData.map((item)=><Work key= {item.id} company={item.company} date={item.date} position={item.position} roles={item.roles}/>)}

    </Container>
    </>
  )
}
