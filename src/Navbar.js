import React from 'react'
import "./header.css"
import { BrowserRouter, Route,Routes, Link } from "react-router-dom";
export default function Navbar() {
  return (
    <BrowserRouter>
    <div className='navbar'>
       <div className='nav-logo'>Laviz</div> 
       <div className='nav-options'>
            <ul>
                <Link to '#service'>sdf</Link>
                <li><a href="">Contact</a></li>
                <li><a href="">Skills</a></li>
                <li><a href="">Projects</a></li>

            </ul>
       </div>
    </BrowserRouter>
  )
}
