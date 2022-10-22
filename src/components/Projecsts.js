import React from 'react'
import styled from 'styled-components'
import { TitleTab } from '../styled-components/TitleTab'
import { Title } from '../styled-components/Title'

import ProjectTab from './ProjectTab'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 17px;
    width: 90%;
    margin: auto;

`
export default function Projecsts() {
  return (
    <>
      <div style={{margin: "auto",width:"90%", marginTop:"100px"}}>
        <TitleTab>💎 Portfolio</TitleTab>
        <Title>My Projects:</Title>
        </div>
    <Container>
        <ProjectTab/>
        <ProjectTab/>
        <ProjectTab/>
        <ProjectTab/>

    </Container>
    <a href='/wo' style={{display:"flex", justifyContent:"flex-end", marginRight:"80px",marginTop:"30px", textDecoration:"none", color:" rgba(123, 74, 226, 0.5)"}}>View More On Github</a>

    </>
  )
}
