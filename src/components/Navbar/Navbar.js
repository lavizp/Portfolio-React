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
                <li><a><Link to="/">Home</Link></a></li>
                <li><a><Link to="/about">About</Link></a></li>
                <li><a><Link to="/">Works</Link></a></li>
                <li><a><Link to="/">Experience</Link></a></li>

            </ul>
        </div>
        <div className='nav-resume'>
            <button> Resume </button>
        </div>
    </div>
  )
}
