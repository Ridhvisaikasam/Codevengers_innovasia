import './App.css';
import { useState } from 'react';

function App() {
  let [idx, setIdx] = useState();
  const [recommendation, setRecommendation] = useState("");
  let [aadharcard, setAadharcard] = useState(null)
  const url = 'http://localhost:5000/api/soil/xx'
  const getinfo = async () => {

    const response = await fetch(`${url}/${idx}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    console.log(json);
    const str = JSON.stringify(json);
    const ans = JSON.parse(str)
    console.log("done")
    console.log(ans)
    setAadharcard(ans)
    console.log(aadharcard);
  }

  const handlechange = (e) => {
    setIdx(e.target.value)
  }
  const handlechangeseed = (e) => {
    setRecommendation(e.target.value)
  }
  const handlechangeaadhar = (e) => {
    setAadharcard(e.target.value)
  }
  const url1 = 'http://localhost:5000/api/recommend'
  const fetchuser = async () => {

    const response = await fetch(`${url1}/${aadharcard}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        recommended: recommendation
      })
    });
  }
  return (
    <div className="container my-5" style={{width:"50rem"}}>
      <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Soil ID</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Soil ID" onChange={handlechange}/>
    <button type="button" className="btn btn-dark my-4" onClick={getinfo} style={{width:"48rem"}}>Submit</button>
  </div>
  <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Aadhar ID</label>
  <input type="email" class="form-control" id="exampleFormControlInput2" placeholder="Enter Aadhar ID" onChange={handlechangeaadhar}/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Recommendation</label>
  <input type="email" class="form-control" id="exampleFormControlInput3" placeholder="Enter Description" onChange={handlechangeseed}/>
  <button type="button" className="btn btn-dark my-4" onClick={fetchuser} style={{width:"48rem"}}>Submit</button>
</div>
    </div>
    
  );
}

export default App;
