import React from 'react'
import './footer.css'
import {FaGithub,FaLinkedin,FaTwitterSquare} from 'react-icons/fa';

export default function Footer() {
  return (
    <div className='footer-container'>
        <h1>Lets Work Together</h1>
        <h2>I am available for freelancing gigs</h2>
        <div className='footer-connect-logos'>
            <a href="https://github.com/lavizp" target="blank"><FaGithub size={30} color="white"/></a>
            <a href="https://www.linkedin.com/in/laviz-pandey-4b8b55208/" target="blank"><FaLinkedin size={30} color="white"/></a>
            <a href="https://twitter.com/lavizpandey" target="blank"><FaTwitterSquare size={30} color="white"/></a>

        </div>
        <h3>Developed By Laviz Pandey</h3>
        <h3>Design Inspiration <a href='https://dribbble.com/shots/18363312-Richard-Freelancer-Portfolio' target="blank">Ehsna Rahman</a></h3>
    </div>
  )
}
