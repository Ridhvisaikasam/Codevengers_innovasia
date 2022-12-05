import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import Navbar2 from './Navbar2'
function Signin() {
    const history = useNavigate()
    const [Sign,setSign]=useState({email:"",password:""})
    const url='http://localhost:5000/api/auth/'
    const createuser=async ()=>{
                 
        const response = await fetch(`${url}`, {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({emailid:Sign.email,password:Sign.password})
        });
      }
    const changes=(e)=>{
       setSign({...Sign,[e.target.name]:e.target.value})
    }
    const save=()=>{
        createuser();
        console.log("saved");
        history("/Login")
        alert("Signin succesful!!")
        
    }
  return (
    <div className="noc" style={{backgroundColor:"#C6EBC9", height:'36rem'}}>
<Navbar2/>
<form class="container my-5" style={{width:"500px"}} >
  <div class="form-outline mb-4">
  <label class="form-label" for="form2Example1">Email address</label>
  <input type="email" id="form2Example1" placeholder="Enter Email" class="form-control" name="email" onChange={changes} />
  </div>

  <div class="form-outline mb-4">
  <label class="form-label" for="form2Example2">Password</label>
  <input type="password" id="form2Example2" placeholder="Enter password" class="form-control" name="password" onChange={changes}/>
  </div>

  <button type="button" class="btn btn-dark btn-block mb-4" style={{width:"30rem"}} onClick={save}>Signin</button>
  <div class="text-center">
    <p>Already a member? <a href="/Login">Login</a></p>  
  </div>
</form>
    </div>
  )
}

export default Signin