import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {useNavigate } from 'react-router';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function Seeditem(props) {
    const [update,addupdate]=useState({eseedid:"",edetails:"",eseedname:"",edescription:""})
const [show,addshow]=useState(false);
const closeform=()=>{
    addshow(false);
}
const url=`http://localhost:5000/api/seedid`
const updatesoilinfo=async (key)=>{
               
  const response = await fetch(`${url}/update/${key}`, {
    method: 'PUT', 
    headers: {
      'Content-Type': 'application/json',
      "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM4OGM5ZGU1ODNhYzBhMzEwMzgwYzUyIn0sImlhdCI6MTY2OTkwOTg0Nn0.p9c0r7M5zbZ3tgTpl83QytmWvaMCZ2LFolMcoPgwvWA"},
    body: JSON.stringify({seedid:update.eseedid,details:update.edetails,seedname:update.eseedname,description:update.edescription})
  });
    console.log("updated");
    const json= await response.json(); 
    console.log(json);
}
const updatechanges=(key)=>{
     updatesoilinfo(key);
     closeform();
     alert("Data changed succesfully!!")
}
const  changes=(e)=>{
    addupdate({...update,[e.target.name]:e.target.value})
    console.log(update);
 }
 const handlechanges=()=>{
    addshow(true);
    addupdate({eseedid:props.soils.seedid,edetails:props.soils.details,eseedname:props.soils.seedname,edescription:props.soils.description});
     
}
  return (
    <div>
<Modal show={show}  animation={false}>
        <Modal.Header closeButton onClick={closeform}>
          <Modal.Title className='headings'>Editing</Modal.Title>
        </Modal.Header>
        <Modal.Body>  
        <form>
        <div className="form-outline mb-4">
<label className="form-label headings" for="form3Example1cg">Seed ID</label>
  <input type="text" id="form3Example1cg" name="eseedid" className="form-control form-control-lg" value={update.eseedid} onChange={changes}/>
 
</div>

<div className="form-outline mb-4">
<label className="form-label headings" for="form3Example3cg" >Details</label>
<textarea className="form-control" id="exampleFormControlTextarea1" name="edetails"  value={update.edetails}  onChange={changes}></textarea>
 
</div>

<div className="form-outline mb-4">
<label className="form-label headings" for="form3Example4cg">Seed name</label>
  <input type="text" id="form3Example4cg"  name="eseedname" className="form-control form-control-lg"  value={update.eseedname}  onChange={changes}/>

</div>

<div className="form-outline mb-4">
<label className="form-label headings" for="form3Example4cg">Description</label>
  <input type="text" id="form3Example4cg"  name="edescription" className="form-control form-control-lg"  value={update.edescription}  onChange={changes}/>

</div>
</form>       
</Modal.Body>
<Modal.Footer>
          <Button variant="dark headings" onClick={closeform}>
            Close
          </Button>
          <Button type="submit" variant="dark headings"onClick={()=>{updatechanges(props.soils._id)}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

          <div class="details container my-4">
      <div class="card soilcard">
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark headings"style={{width:"60px"}}>
         ID:  {props.soils.seedid}
        </span>
  <table>
  <tr>
    <th>
    <img src="https://media.istockphoto.com/id/1372896722/photo/potted-banana-plant-isolated-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=YUsWUtmmiNtJ0AmhT3mC0sgNfcK9c0DPnyoVFnXNChI=" alt="item" style={{width:"3rem"}}/>
    </th>
    <th>
    <h4 class="card-title mx-3 my-3" >{props.soils.seedname}</h4>
    </th>
  </tr>
  </table>
  <ul class="list-group list-group-flush soilcard">
    <li class="list-group-item soilcard" style={{border:"1rem"}}>Details : {props.soils.details}</li>
    <li class="list-group-item soilcard">Description : {props.soils.description}</li>
  </ul>
</div>
<div class="d-flex flex-row-reverse">
  <div class="p-2"><button type="button" class="btn btn-dark mx-2" onClick={handlechanges} style={{width:"6rem"}}>Edit</button></div>
  {/* <div class="p-2"><button type="button" class="btn btn-secondary mx-2">Test Sample</button></div> */}
</div>
</div>
          </div>
  )
}

export default Seeditem