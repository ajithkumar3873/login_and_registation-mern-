import React from 'react'
import { Link } from "react-router-dom";

function Group2() {
  function err(){
    alert("Access Denied...")
  }
  return (
    <div>
      <div class="container">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
      <li class="nav-item"><a href="#" class="nav-link" aria-current="page" onClick={err}>Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link" onClick={err}>About</a></li>
        <Link to="/contact"><li class="nav-item"><a href="#" class="nav-link" >Contact</a></li></Link>
        <Link to="/feedback"> <li class="nav-item"><a href="#" class="nav-link">Feedback</a></li></Link>
      </ul>
    </header>
    
  </div>
    </div>
  )
}

export default Group2
