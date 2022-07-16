import React from 'react'
import "./header.css"
import {  Route,Routes, Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className='navbar'>
       <div className='nav-logo'>Laviz</div> 
       <div className='nav-options'>
            <ul>
                <li><Link to>About</Link></li>
                <li><Link to>Skills</Link></li>
                <li><Link to>Projects</Link></li>
                <li><Link to>Contact</Link></li>

            </ul>
       </div>
       </div>
  )
}
