import React, { useEffect, useState } from 'react'
import Seeditem from './Seeditem';
import Navbar from './Navbar'
function Seedinfo() {
    const [Soil,addSoil]=useState(null);
    const url='http://localhost:5000/api/seedid/getseedinfo'
    const getinfo=async ()=>{
                 
        const response = await fetch(`${url}`, {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
            'auth-token':localStorage.getItem("token")
          },
        });
        const json= await response.json(); 
        addSoil(json);
        console.log(json);
      }
      useEffect(()=>{
        getinfo();
      },[])
  return (
  <div style={{backgroundColor:"#C6EBC9"}}>
    <Navbar/>
   { Soil&&<div className='container'>
    <div>
      <h1>hi</h1>
    </div>
     <div className='row coloring3'>
    {Soil.map((soil)=>{
      return <div className="col-md-6 my-3"><Seeditem soils={soil}/></div>
    })
     }
     </div>
     </div>}

     </div>
  )
}

export default Seedinfo