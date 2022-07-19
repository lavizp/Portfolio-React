import React from 'react'
import '../styles/contacts.css'
import Contact from './Contact'
import { IconContext } from 'react-icons/lib';


export default function Contacts({contactList}) {
    const contactListReact = contactList.map((a) => <Contact name={a.name} logo={a.logo} link={a.link}/>)

  return (

    <>
    <IconContext.Provider value ={{color: "white", size: "9em", margin: "auto"}}>

        <h1 className='contacts-text'>Contacts:</h1>
        <div className='contacts-container'>
          {contactListReact}
        </div>
      </IconContext.Provider>
    </>
  )
}
