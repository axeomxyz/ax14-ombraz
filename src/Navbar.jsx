import React from 'react'

import './App.css'
import { Link } from "react-router-dom";

function Navbar() {
  
  return (
    <>
       <div style={{display:'flex', flexDirection:'row', gap:'10vw', paddingBottom:'5vh', paddingTop:'5vh', justifyContent:'center'}}>
      <li>
      <Link to="/">Instagram Comments</Link>
      </li>
      <li>
      <Link to="dm">Instagram DMs</Link>
      </li>
      <li>
      <Link to="email">Email Responses</Link>
      </li>
    </div>
      
    </>
  )
}

export default Navbar
