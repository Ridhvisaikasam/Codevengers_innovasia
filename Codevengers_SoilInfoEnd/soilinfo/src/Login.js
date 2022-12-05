import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const history=useNavigate();
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
          
          history("/Soilinfo")
      }
      const save=()=>{
        fetchuser();
        console.log("logged in")
        
      }
    const changes=(e)=>{
        addlogin({...login,[e.target.name]:e.target.value})
     }
  return (
    <div>
   <form class="container my-5" style={{width:"500px"}} >
  <div class="form-outline mb-4">
  <label class="form-label headings" for="form2Example1">Email address</label>
  <input type="email" id="form2Example1" placeholder="Enter Email" class="form-control" name="email" onChange={changes} />
  </div>

  <div class="form-outline mb-4">
  <label class="form-label headings" for="form2Example2">Password</label>
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
  <button type="button" class="btn btn-primary btn-block mb-4 headings" style={{width:"500px"}} onClick={save}>Login</button>
  <div class="text-center">
    <p>Not a member? <a href="/Signin">Register</a></p>  
  </div>
  </form>
    </div>
  )
}

export default Login