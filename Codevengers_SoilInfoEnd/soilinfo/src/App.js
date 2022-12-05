
import './App.css';
import Signin from './Signin';
import Login from './Login';
import Getinfo from './Getinfo';
import Soilinfo from './Soilinfo';
import Home from './Home';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Navbar from './Navbar';
function App() {
  return (
    
  <div>
      
            <Router>
            <Navbar/>
          <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/Login" element={<Login/>} />
          <Route exact path="/Signin" element={<Signin/>}/>
          <Route exact path="/Getinfo" element={<Getinfo/>}/>
          <Route exact path="/Soilinfo" element={<Soilinfo/>}>
          </Route>
          </Routes>
         </Router>
  </div>
  );
}

export default App;
