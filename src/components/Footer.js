import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 50px;
    margin: auto;
    display: flex;
    flex-direction: column;
    padding: 30px 0;
    gap: 10px;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    background-color: rgba(123, 74, 226, 0.1);
    h5{
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        display: flex;
        align-items: center;
        text-align: justify;
        margin: 0;
        color: rgba(255, 255, 255, 0.5);
        a{
            color: rgba(255, 255, 255, 0.5);
        }
    }
 `
export default function Footer() {
  return (
    <Container>
        <h5>Developed by Laviz Pandey</h5>
        <h5>Designed By &nbsp;<a href='https://www.figma.com/community/file/1162385628597290713'> Henrique Sousa</a></h5>

    </Container>
  )
}
