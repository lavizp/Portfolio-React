import React from 'react'
import styled from 'styled-components'

import { Title } from '../styled-components/Title'
import { TitleTab } from '../styled-components/TitleTab'
import CertificationTab from './CertificationTab'
import { achievementData } from '../Data/Achievements'
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
const CertContainer = styled.div`
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


export default function Certifications() {
  return (
    <>
    <div id="certifications"></div>
    <CertContainer>
        <TitleTab>🏆 Awards</TitleTab>
        <Title>Certifications and Achievements:</Title>
    <Container>
        {achievementData.map((item)=>
            <CertificationTab key ={item.id} title={item.title} description={item.position} link={item.link} image={item.image}/>
            )}

    </Container>
    </CertContainer>
  </>
  )
}
