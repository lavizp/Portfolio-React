import React from 'react'
import styled from 'styled-components'

const Container =  styled.div`
    background-color: ${props=> props.variant? "none":"background: rgba(123, 74, 226, 0.1)"};
    border-radius: 16px;
    border: 1px solid rgba(123, 74, 226, 0.5);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 20px 20px;
    height: 330px;
    width: 230px;
    h3{
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        color: white;
    }
    p{
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        margin-bottom: 30px;
        color: rgba(255, 255, 255, 0.5);
    }
`
const Button = styled.button`
    background-color: ${props=> props.color==="green"? "rgba(74, 226, 144, 0.3)":"rgba(123, 74, 226, 0.1)"};
    color: ${props=> props.color==="green"? "#4AE290":props.theme.secondary};
    width: 83px;
    height: 30px;
    border: none;
    border-radius: 8px;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
`

const Image = styled.img`
    width: 90%;
    height: 80%;
    margin: auto;
    border-radius: 16px;
    object-fit: cover;
`

export default function ProjectTab() {
  return (
    <Container>
        <h3>Task Apart</h3>
        <p>A Task Managament Application to manage and track daily tasks.</p>
        <div style={{display: "flex", gap:"10px", marginBottom:"20px"}}>
            <Button color='green'>Live</Button>
            <Button >Code</Button>
        </div>
        <Image src="https://media.moddb.com/images/members/5/4550/4549205/duck.jpg"></Image>
    </Container>
  )
}
