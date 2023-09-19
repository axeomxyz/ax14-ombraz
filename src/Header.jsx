import React from 'react'

import './App.css'
import logo from '../src/assets/logo.svg'

function Header() {
  
  return (
    <>
       <header style={{width:'100%', height:'auto', backgroundColor:'#333536'}}>
            <img src={logo} style={{width:'25%', padding:'2%'}}></img>
       </header>
      
    </>
  )
}

export default Header
