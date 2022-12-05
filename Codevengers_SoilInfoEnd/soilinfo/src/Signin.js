import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signin() {
    const [Sign,setSign]=useState({email:"",password:""})
    const history=useNavigate();
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

  <button type="button" class="btn btn-primary btn-block mb-4 headings" style={{width:"500px"}} onClick={save}>Signin</button>
  <div class="text-center">
    <p>Already a member? <a href="/Login" className='headings'>Login</a></p>  
  </div>
</form>
    </div>
  )
}

export default Signin