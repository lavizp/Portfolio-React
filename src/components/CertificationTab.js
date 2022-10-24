import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    width: 200px;
    height: 350px;
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
        color: rgba(255, 255, 255, 0.5);
        

    };
    a{
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: rgba(123, 74, 226, 1);
        text-decoration: none;
    }
`
const Image = styled.img`
    width: 100%;
    height: 50%;
    margin: auto;
    border-radius: 16px;
    object-fit: cover;
`
export default function CertificationTab({title, description, link,image}) {
  return (
    <Container>
        <Image src={image}/>
        <h2>{title}</h2>
        <p>{description}</p>
        {link &&<a href={link} target="blank">View</a>}
    </Container>
  )
}
