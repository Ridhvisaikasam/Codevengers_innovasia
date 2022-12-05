import './App.css';
import Signin from './Signin';
import Login from './Login';
import Seedid from './Seedid';
import Seedinfo from './Seedinfo';
import Home from './Home';
import Home2 from './Home2';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <>
    <Router>
    <Routes>
    <Route exact path="/Login" element={<Login/>}/>   
    <Route exact path="/Signin" element={<Signin/>}/>          
    <Route exact path="/Seedinfo" element={<Seedinfo/>}/> 
    <Route exact path="/Seedid" element={<Seedid/>}/> 
    <Route exact path="/" element={<Home2/>}/> 
    </Routes>
    </Router> 
    </>
  );
}

export default App;
