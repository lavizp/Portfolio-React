import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './homepage.css'
export default function HomePage() {
  return (
    <div>
      <Navbar/>
      <div className='home-intro-container'>
        <div className='home-intro-left'>
          <div className='intro-text'>
            <h1>Hi! I am</h1>
            <h1>Laviz Pandey</h1>
            <h3>Professional Software Developer  with<br/>over <mark className='gradient'>2 years</mark> of development experience.</h3>
            <div className='intro-buttons'>
              <button className='orange'>Projects</button>
              <button className='grey'>Contact</button>

            </div>

          </div>
          <div className='intro-connect'>
            asd
          </div>
        </div>
        <div className='home-intro-right'></div>

      </div>
    </div>
  )
}
