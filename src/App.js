import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { BrowserRouter } from "react-router-dom";

import { Routes, Route, Link } from "react-router-dom";






  
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      
        <Route path='/' element={<Home/>}>
         
        </Route>

       
</Routes>
      </BrowserRouter>

    </div>
  );
}


export default App;
