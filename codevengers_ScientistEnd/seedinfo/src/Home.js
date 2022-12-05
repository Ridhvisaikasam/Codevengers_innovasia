import React from 'react'
import { useNavigate } from 'react-router'
import Navbar2 from './Navbar2';
function Home() {
 const history = useNavigate();
 const start=()=>{
history("/Signin")
 }
    return (
    <div style={{backgroundColor:"#C6EBC9"}}>
    <Navbar2/>

    <div style={{backgroundColor:"#C6EBC9",height:"29rem"}}>
    <center>
        <div class="container my-5" style={{width:"30rem"}}>
        <h1>Welcome!!</h1>
        <p>This is a website for scientists who guide with simple and easy steps to grow their crops. The main perpose of this webside is to note detaled steps to grow crops making the farmers easy to feed us.</p>
        <button type="button" class="btn btn-dark btn-block mb-4" style={{width:"30rem"}} onClick={start}>Get Started!!</button>
        </div>
    </center>
    </div>
    </div>

  )
}

export default Home
