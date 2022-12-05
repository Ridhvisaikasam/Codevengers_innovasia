import React, { useEffect, useState } from 'react'
import Soilitem from './Soilitem';
function Getinfo() {
    const [Soil,addSoil]=useState(null);

    const url='http://localhost:5000/api/soilput/getsoilinfo'
    const getinfo=async ()=>{
              
        const response = await fetch(`${url}`, {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
            'auth-token':localStorage.getItem('token')
          },
        });
         const json=await response.json(); 
        addSoil(json);
        console.log(json);
      }
      useEffect(()=>{
        getinfo();
      },[])
  return (
   <div>{(Soil!==null)?
   <div className='container'>
     <div className='row'>
    {Soil.map((soil)=>{
      return <div className="col-md-4 my-3"><Soilitem soils={soil}/></div>
    })
     }
     </div>
     </div>:<div><h1>no lands added</h1></div>}
     </div>
  )
}

export default Getinfo