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
`
const NavRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 50%;
`
const NavItem = styled.p`
    color: ${props=> props.selected? "rgba(123, 74, 226, 0.5)":"rgba(255, 255, 255, 0.5)"};
    opacity: ${props=> props.selected? "0.9":"0.5"};

    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
`
export default function Navbar() {
  return (
    <NavContainer>
        <FaMeetup color="white" size={45}/>
        <NavRight>

        <NavItem selected>Home</NavItem>
        <NavItem>About</NavItem>
        <NavItem>Projects</NavItem>
        <NavItem>Certifications</NavItem>
        <NavItem>Skills</NavItem>
        <NavItem>Contact</NavItem>




        </NavRight>

    </NavContainer>
  )
}
