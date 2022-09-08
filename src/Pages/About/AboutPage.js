import React from 'react'
import './aboutpage.css'
import Navbar from '../../components/Navbar/Navbar'
import Laviz from '../../assets/Laviz2.jpg'

export default function AboutPage() {
  return (
    <>
        <Navbar/>
        <div className='about-intro'>
            <div className='about-intro-description'>
                <h1>
                I am a self-tought software developer with experties in<br/> building scalable web applications.
                </h1>
            </div>
            <div className='about-intro-picture'>
                {/* <img src={Laviz} alt="Dajju"/> */}
            </div>
        </div>
        <div className='about-quote'>
            <div className='quote-container'>
                <p>Random Quote:</p>
                <h2>“Creativity is Intilligience having fun”</h2>
            </div>
            <div className='additional-description'>
                <h1>About Me</h1>
                <p>I love to solve complex technical problems. This is why I picked up programming at a very young age. I started off making video games, and then started learning front end web development. I have expertise in HTML,CSS,React and the Unity Game Engine.I love working in a fast paced environment and am very open to learning new technologies. I love connecting to people and would love to share a conversation with anyone.  </p>
            </div>
        </div>
    </>
  )
}
