import React from 'react'
import "../styles/header.css"
import lavizPhoto from"../assets/Laviz.png"

export default function Homepage() {
  return (
    <div className='header-container' id="service">
        <img src={lavizPhoto} className='myImage'></img>
        <div className='header-info'>
            <h2>Hello, I am</h2>
            <h1>Laviz Pandey</h1>

        </div>
    </div>
  )
}
