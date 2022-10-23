import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 400px;
    height: 300px;
    border-radius: 16px;
    background: rgba(123, 74, 226, 0.1);
    padding: 20px 50px;
    h2{
        color: white;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
    }
    p {
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: rgba(123, 74, 226, 1);

    };
    li{
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: rgba(255, 255, 255, 0.5);

    }
    h5{
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        text-align: right;
        color: #7B4AE2;
    }
`
export default function Work({company, date, roles, position}) {
  return (
    <Container>
        <h2>{position}</h2>
        <p>{company}</p>      
        <ul>
            {roles.map((role,index)=> <li key={index}>{role}</li>)}

        </ul>
        <h5>{date}</h5>

    </Container>
  )
}
