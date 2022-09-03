import React from 'react'
import "../styles/header.css"
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className='navbar'>
       <div className='nav-logo'>Laviz</div> 
       <div className='nav-options'>
            <ul>
                <li><a href ="#about-container">About</a></li>
                <li><a href='#skills-container'>Skills</a></li>
                <li><Link to = {'/projects'}>Projects</Link></li>
                <li><Link to = {'./contacts'}>Contact</Link></li>

            </ul>
       </div>
       </div>
  )
}
