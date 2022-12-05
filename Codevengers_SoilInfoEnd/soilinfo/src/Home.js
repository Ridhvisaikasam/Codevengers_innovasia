import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'
function Home() {
    const history=useNavigate();
    const handlechanges=()=>{
        history("/Login")
    }
  return (
       <div>
        
        <div className='row my-17'>
        <div className="container my-3 col-md-4">
        <div className='container coloring'>
                  Welcome To Soil Information
          </div>
        </div>
        
        </div>
       </div>
        
  )
}

export default Home