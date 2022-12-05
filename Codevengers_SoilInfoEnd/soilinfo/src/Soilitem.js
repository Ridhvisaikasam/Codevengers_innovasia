import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {useNavigate } from 'react-router';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function Soilitem(props) {
          const [update,addupdate]=useState({
                                eaadharcard:"",
                                elocation:"",
                                elandarea:"",
                              
                                eph:"",
                                eK:"",
                                eP:"",
                                eN:"",
                               
          })
const [show,addshow]=useState(false);
const closeform=()=>{
    addshow(false);
}
const url=`http://localhost:5000/api/soilput`
const updatesoilinfo=async (key)=>{
               
  const response = await fetch(`${url}/update/${key}`, {
    method: 'PUT', 
    headers: {
      'Content-Type': 'application/json',
      "auth-token":localStorage.getItem('token')},
    body: JSON.stringify({aadharcard:update.eaadharcard,location:update.elocation,landarea:update.elandarea,
      ph:update.eph,
      K:update.eK,
       N:update.eN,
       P:update.eP
      })
     
  });
    console.log("updated");
    const json= await response.json(); 
    console.log(json);
    return json
}
const updatechanges=(key)=>{
     const l=updatesoilinfo(key);
     closeform();

}
const  changes=(e)=>{
    addupdate({...update,[e.target.name]:e.target.value})
    console.log(update);
 }
 const handlechanges=()=>{
    addshow(true);
    addupdate({eaadharcard:props.soils.aadharcard,elocation:props.soils.location,elandarea:props.soils.landarea,
      eph:props.soils.ph,
     eN:props.soils.N,
    eP:props.soils.P,
    eK:props.soils.K
  });
     
}
  return (
    <div>
<Modal show={show}  animation={false}>
        <Modal.Header closeButton={closeform}>
          <Modal.Title className='headings'>editing</Modal.Title>
        </Modal.Header>
        <Modal.Body>  
        <form>
  <div class="form-group">
    <label for="exampleInputEmail1" className='headings'>aadharcard</label>
    <input type="text" class="form-control" id="exampleInputEmail1"  placeholder="Enter aadharnumber" value={update.eaadharcard} name="eaadharcard" onChange={changes}/>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1" className='headings'>location</label>
    <input type="text" class="form-control" id="exampleInputEmail1"  placeholder="Enter location" name="elocation"  value={update.elocation} onChange={changes}/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1" className='headings'>landarea</label>
    <input type="text" class="form-control" id="exampleInputEmail1"  placeholder="Enter landarea" name="elandarea" value={update.elandarea} onChange={changes}/>
   
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1" className='headings'>Nitrogen</label>
    <input type="text" class="form-control" id="exampleInputEmail1"  placeholder="Enter Nitrogen" name="eN"  value={update.eN} onChange={changes}/>
   
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1" className='headings'>ph</label>
    <input type="text" class="form-control" id="exampleInputEmail1"  placeholder="Enter ph" name="eph"  value={update.eph} onChange={changes}/>
   
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1" className='headings'>Potassium</label>
    <input type="text" class="form-control" id="exampleInputEmail1"  placeholder="Enter Potassium" name="eK"  value={update.eK} onChange={changes}/>
   
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1" className='headings'>Phosphorus</label>
    <input type="text" class="form-control" id="exampleInputEmail1"  placeholder="Enter Phosphorus" name="eP"  value={update.eP} onChange={changes}/>
   
  </div>
</form>      
</Modal.Body>
<Modal.Footer>
          <Button variant="secondary headings" onClick={closeform}>
            Close
          </Button>
          <Button type="submit" variant="secondary headings"onClick={()=>{updatechanges(props.soils._id)}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

        <div className="card coloring4" style={{width:"18rem"}}>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary headings">
          {props.soils.aadharcard}
        </span>
        <div className="card-body">
       
          <p className="card-title texts">location: {props.soils.location}</p>
          <p className="card-text texts">landarea: {props.soils.landarea}</p>
         
          <i className="fa-solid fa-pen" onClick={()=>{handlechanges()}}></i>
           
          </div>
          </div>
          </div>
  )
}

export default Soilitem