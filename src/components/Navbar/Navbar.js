import React from 'react'
import "./navbar.css"
export default function Navbar() {
  return (
    <div className='nav-container'>
        <div className='nav-logo'>
            <h1>Laviz</h1>
        </div>
        <div className='nav-list-container'>
            <ul>
                <li><a>Home</a></li>
                <li><a>Works</a></li>
                <li><a>About</a></li>
                <li><a>Experience</a></li>
            </ul>
        </div>
        <div className='nav-resume'>
            <button> Resume </button>
        </div>
    </div>
  )
}
