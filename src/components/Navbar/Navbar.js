import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div className='nav-container'>
        <div className='nav-logo'>
            <h1>Laviz</h1>
        </div>
        <div className='nav-list-container'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Works</Link></li>
                <li><Link to="/experience">Experience</Link></li>

            </ul>
        </div>
        <div className='nav-resume'>
            <button> Resume </button>
        </div>
    </div>
  )
}
