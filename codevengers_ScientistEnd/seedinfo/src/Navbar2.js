import React from 'react'

function Navbar2() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <img src="logo192.png" width="30" height="30" class="d-inline-block align-top" alt=""/>
    <a class="navbar-brand" href="/">Scientist</a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto" style={{marginLeft:"1000px"}}>
        <li class="nav-item active">
          <a class="nav-link" href="/Signin">SignIn</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Login">Login</a>
        </li>
      </ul>
    </div>
  </nav>
    </div>
  )
}

export default Navbar2
