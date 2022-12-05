import React from 'react'

function Navbar() {
    const alertset=()=>{
        alert("Logout succesful!!")
    }
    
  return (
    <>
    <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style={{position:"fixed", zIndex:"1"}}>
    <img src="logo192.png" width="30" height="30" class="d-inline-block align-top" alt=""/>
    <a class="navbar-brand mx-1" href="/Seedinfo">Scientist</a>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="/Seedinfo">Seeds Info</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Seedid">New Seed</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/" style={{marginLeft:"900px"}} onClick={alertset}>Logout</a>
        </li>
      </ul>
    </div>
  </nav>
    </div>
</>
  )
}

export default Navbar
