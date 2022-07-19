import React from 'react'
import '../styles/contacts.css'
export default function Contact({logo, name, link}) {
  return (
    <div className='contact-single-container'>
      <div className='contact-logo'><a href={link} target='blank'>{logo}</a></div>
      <h1>{name}</h1>
    </div>
  )
}
