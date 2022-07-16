import React from 'react'
import './styles/about.css'
import LavizPic from './assets/Laviz2.jpg'

export default function About({title,myDesc}) {
  return (
    <div  className='about-container'>
        <h1>About</h1>
        <div className='about-box' id='about-container'>
            <div className='about-description'>
                <h1>{title}</h1>
                <p>{myDesc}</p>
            </div>
            <div className='about-picture'>
                <img src={LavizPic}></img>
            </div>
        </div>
    </div>
  )
}
