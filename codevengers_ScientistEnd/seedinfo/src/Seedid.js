import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'
import { useNavigate } from 'react-router'
function Seedid() {
  const history = useNavigate()
  const [land,addland]=useState({seedid:"",
                                details:"",
                                seedname:"",
                                description:"",
                              })
  const url='http://localhost:5000/api/seedid'
  const fetchuser=async ()=>{
                 
    const response = await fetch(`${url}/`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        'auth-token':localStorage.getItem("token")
      },
      body: JSON.stringify({seedid:land.seedid,
                            details:land.details,
                            seedname:land.seedname,
                            description:land.description,
                            })
    });
  }

 const handlechange=(e)=>{
  addland({...land,[e.target.name]:e.target.value})
  console.log(land);
 }
 const savechanges=()=>{
  fetchuser();
  console.log("saved");
  alert("Data Saved succesfully!!")
  history("/seedinfo")
 }
  return (
    <div style={{backgroundColor:"#C6EBC9"}}>
      <div style={{height:"5rem"}}>
    <Navbar/>
    </div>
    <div style={{backgroundColor:"#C6EBC9", height:"31rem"}}>
    <div class="container" style={{backgroundColor:"#C6EBC9",width:"500px"}}>
      
<form >
  <div class="form-group my-2" >
    <label for="exampleFormControlInput1">Seed ID:</label>
    <input type="text" class="form-control" id="exampleInputEmail1"  placeholder="Enter seed ID" name="seedid" onChange={handlechange}/>
  </div>

  <div class="form-group my-2">
    <label for="exampleFormControlTextarea1">Details</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Enter details" name="details" rows="3" onChange={handlechange}></textarea>
  </div>

  <div class="form-group my-2">
    <label for="exampleFormControlInput1">SeedName:</label>
    <input type="text" class="form-control" id="exampleInputEmail1"  placeholder="Enter Seed name" name="seedname" onChange={handlechange}/>
  </div>

  <div class="form-group my-2">
    <label for="exampleFormControlTextarea1">Description</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Enter description" name="description" rows="3" onChange={handlechange}></textarea>
  </div>

  <button type="button" class="btn btn-dark my-2" style={{width:"30rem"}} onClick={savechanges}>Submit</button>
</form>

    </div>
    </div>
    </div>
  )
}

export default Seedid