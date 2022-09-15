import React, { useEffect, useState } from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'
export default function Navbar() {
    const openNav = () =>{
        setNavOpen(!navOpen);
    }
    const[navOpen, setNavOpen] = useState("false");
    useEffect(() =>{
        setNavOpen(false);
    },[])
  return (
    <div className='nav-container'>
        <div className='nav-logo'>
            <h1>Laviz</h1>
        </div>
        <div className={navOpen? 'nav-list-container': 'not-visible'}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Works</Link></li>
                <li><Link to="/experience">Experience</Link></li>
                <li><Link to="/experience"><button className='nav-resume'> Resume </button></Link></li>


            </ul>
        </div>
        <button className='nav-toggle-button' onClick={openNav}>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>

        </button>
    </div>
  )
}
