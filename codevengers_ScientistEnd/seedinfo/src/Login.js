import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import Navbar2 from './Navbar2'
function Login() {
    const history = useNavigate()
    const [login,addlogin]=useState({email:"",password:""})
    const fetchuser=async ()=>{
        const url='http://localhost:5000/api/auth'
                 
        const response = await fetch(`${url}/login`, {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({emailid:login.email,password:login.password})
        });
          console.log("login");
          const json= await response.json(); 
          console.log(json);
          localStorage.setItem('token',json.token)

      }
      const save=()=>{
        fetchuser();
        console.log("logged in")
        history('/seedinfo')
        alert("Hello! Welcome to codevengers- scientist!!")
      }
    const changes=(e)=>{
        addlogin({...login,[e.target.name]:e.target.value})
     }
  return (
    <div style={{backgroundColor:"#C6EBC9", height:'36rem'}}>
<Navbar2/>
<form class="container my-5" style={{width:"500px"}} >
  <div class="form-outline mb-4">
  <label class="form-label my-2" for="form2Example1">Email address</label>
  <input type="email" id="form2Example1" placeholder="Enter Email" class="form-control" name="email" onChange={changes} />
  </div>

  <div class="form-outline mb-4">
  <label class="form-label" for="form2Example2">Password</label>
  <input type="password" id="form2Example2" placeholder="Enter password" class="form-control" name="password" onChange={changes}/>
  </div>

  <div class="row mb-4" >
    <div class="col d-flex justify-content-center">
    <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="form2Example31" unchecked />
        <label class="form-check-label" for="form2Example31"> Remember me </label>
      </div>
    </div>
 
  </div>
  <button type="button" class="btn btn-dark btn-block mb-4" style={{width:"30rem"}} onClick={save}>Login</button>
  <div class="text-center">
    <p>Not a member? <a href="/Signin">Sign-up</a></p>  
  </div>
  </form>

</div>
  )
}

export default Login