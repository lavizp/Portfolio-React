import React from 'react'
import styled from 'styled-components'
import { TitleTab } from '../styled-components/TitleTab'
import { Title } from '../styled-components/Title'
import {BiMailSend} from 'react-icons/bi'
import {AiFillLinkedin,AiFillTwitterSquare,AiFillCodepenSquare} from 'react-icons/ai'
const Container = styled.div`
    width: 90%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 50px;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    margin-bottom: 100px;
`
const Button = styled.a`
  border: 1px solid ${props=> props.theme.secondary};
  border-radius: 16px;
  background: none;
  color: ${props=> props.theme.secondary};
  width: 150px;
  display:  flex;
  justify-content: center;
  align-items: center;
  padding: 10px 10px;
  font-weight: 600;
  font-size: 20px;
  line-height: 19px;
  cursor: pointer;
  overflow: hidden;
  text-decoration: none;

  &:hover{
    overflow: visible;
    transition: all 0.05s ease-in-out;
    transform: scale(1.1);
  }

`
const ContactContainer = styled.div`
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

export default function Connect() {
  return (
    <>
      <ContactContainer id="contact">

          <TitleTab>✨ Contact</TitleTab>
          <Title>Check out my Links:</Title>
        </ContactContainer>
    <Container>
      <Button href='mailto: pandeylaviz@gmail.com'><BiMailSend size={30}/>Emai</Button>
      <Button href='https://www.linkedin.com/in/laviz-pandey-4b8b55208/' target="blank"><AiFillLinkedin size={30}/>Linkedin</Button>
      <Button href='https://twitter.com/lavizpandey' target="blank"><AiFillTwitterSquare size={30}/>Twitter</Button>
      <Button href='https://codepen.io/lavizp' target="_blank"><AiFillCodepenSquare size={30}/>Code Pen</Button>
    </Container>
    </>
  )
}
