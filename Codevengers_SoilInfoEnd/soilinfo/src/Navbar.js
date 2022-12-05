import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
function Navbar() {
    const history=useNavigate();
    const changes=()=>{
        localStorage.removeItem('token');
        history("/Login")
    }
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-primary">
  <a class="navbar-brand headings" href="/">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link headings" to="/">Home <span class="sr-only">(current)</span></Link>
      </li>
      {localStorage.getItem('token')&&<li class="nav-item active">
        <Link class="nav-link headings" to="/Soilinfo">Addland <span class="sr-only">(current)</span></Link>
      </li>}
      {localStorage.getItem('token')&&<li class="nav-item active">
        <Link class="nav-link headings" to="/Getinfo">Lands <span class="sr-only">(current)</span></Link>
      </li>}
 
</ul>
{(!localStorage.getItem('token'))?<div class="d-flex justify-content-end">
        <Link class="nav-link headings" to="/Login"> <button type="button" class="btn btn-info">Login</button></Link>
        <Link class="nav-link headings" to="/Signin"> <button type="button" class="btn btn-info">Signin</button></Link>
      </div>:<div class="d-flex justify-content-end"><button type="button" class="btn btn-info" onClick={(changes)}>Logout</button></div>}
  
   
  </div>
</nav>
    </div>
  )
}

export default Navbar