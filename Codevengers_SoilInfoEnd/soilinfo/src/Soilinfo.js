import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Soilinfo() {
  const history=useNavigate();
  const [land,addland]=useState({aadharcard:"",
                                location:"",
                                landarea:"",
                              
                                ph:"",
                                N: "",
                                P: "",
                                K: "",
                              
                               
                              })
  const url='http://localhost:5000/api/soilput'
  const fetchuser=async ()=>{
                 
    const response = await fetch(`${url}/`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        'auth-token':localStorage.getItem('token')
      },
      body: JSON.stringify({aadharcard:land.aadharnumber,
                            location:land.location,
                            landarea:land.landarea,
                  
                                ph:land.ph,
                                N:land.N,
                                K:land.K,
                                P:land.P,
                                
                            })
    });
    history("/Getinfo")
  }
 const handlechange=(e)=>{
  addland({...land,[e.target.name]:e.target.value})
  console.log(land);
 }
 const savechanges=()=>{
  fetchuser();
  console.log("saved");
 
 }
  return (
    <div  className='container'style={{width:"800px"}}>
      <h1 style={{textAlign:"center"}} className='headings'>AddLand</h1>
       <form>
  <div class="form-group">
    <label for="exampleInputEmail1" className='headings'>farmer id</label>
    <input type="text" class="form-control" id="exampleInputEmail1"  placeholder="Enter aadharnumber" name="aadharnumber" onChange={handlechange}/>
    <small id="emailHelp" class="form-text text-muted">enter ur aadharnumber.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1 headings" className='headings'>location</label>
    <input type="text" class="form-control" id="exampleInputEmail1"  placeholder="Enter location" name="location" onChange={handlechange}/>
    <small id="emailHelp" class="form-text text-muted">..</small>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1 headings" className='headings'>landarea</label>
    <input type="text" class="form-control" id="exampleInputEmail1"  placeholder="Enter landarea" name="landarea" onChange={handlechange}/>
    <small id="emailHelp" class="form-text text-muted">...</small>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1 headings" className='headings'>ph</label>
    <input type="text" class="form-control" id="exampleInputEmail1"  placeholder="Enter ph" name="ph" onChange={handlechange}/>
    <small id="emailHelp" class="form-text text-muted">..</small>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1 headings" className='headings'>Nitrogen</label>
    <input type="text" class="form-control" id="exampleInputEmail1"  placeholder="Enter Nitrogen" name="N" onChange={handlechange}/>
    <small id="emailHelp" class="form-text text-muted">enter ur aadharnumber.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1 headings" className='headings'>Phosphorus</label>
    <input type="text" class="form-control" id="exampleInputEmail1"  placeholder="Enter Phosphorus" name="P" onChange={handlechange}/>
    <small id="emailHelp" class="form-text text-muted">..</small>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1 headings" className='headings'>Potassium</label>
    <input type="text" class="form-control" id="exampleInputEmail1"  placeholder="Enter Potassium" name="K" onChange={handlechange}/>
    <small id="emailHelp" class="form-text text-muted">...</small>
  </div>
  <button type="button" class="btn btn-primary headings" onClick={savechanges}>Submit</button>
</form>
    </div>
  )
}

export default Soilinfo