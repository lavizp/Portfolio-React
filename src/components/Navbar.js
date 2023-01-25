import React from 'react'
import styled from 'styled-components'

import {FaMeetup} from "react-icons/fa"
const NavContainer = styled.div`
    background: rgba(123, 74, 226, 0.05);
    width: 90%;
    height: 64px;
    margin: auto;
    margin-top: 30px;
    border-radius: 16px;
    padding-right: 30px;
    padding-left: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px) {
    display: none;
  }
`
const NavRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 50%;
    @media (max-width: 1024px) {
      width: 65%;


    
  }
`
const NavItem = styled.a`
    color: ${props=> props.selected? "rgba(123, 74, 226, 0.5)":"rgba(255, 255, 255, 0.5)"};
    opacity: ${props=> props.selected? "0.9":"0.5"};
    text-decoration: none;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    cursor: pointer;
`
const NavTitle = styled.h2`
  color: white;
  font-size: 30px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`
export default function Navbar() {
  return (
    <NavContainer>
        <NavTitle>LP</NavTitle>
        <NavRight>

        <NavItem href="#home"selected>Home</NavItem>
        <NavItem href="#about">About</NavItem>
        <NavItem href='#projects'>Projects</NavItem>
        <NavItem href='#experience'>Experience</NavItem>

        <NavItem href='#certifications'>Certifications</NavItem>
        <NavItem href='#contact'>Contact</NavItem>




        </NavRight>

    </NavContainer>
  )
}
