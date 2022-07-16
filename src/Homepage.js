import React from 'react'
import "./header.css"
import lavizPhoto from"./Laviz.png"

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
