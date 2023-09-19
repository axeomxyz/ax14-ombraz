import React from 'react'

import './App.css'
import { Link } from "react-router-dom";

function Navbar() {
  
  return (
    <>
       <div style={{display:'flex', flexDirection:'row', gap:'10vw', paddingBottom:'10vh', justifyContent:'center'}}>
      <li>
        <a href="/">Instagram Comments</a>
      </li>
      <li>
        <a href="/dm">Instagram DMs</a>
      </li>
      <li>
        <a href="/email">Email Responses</a>
      </li>
    </div>
      
    </>
  )
}

export default Navbar
