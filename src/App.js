import "./App.css";

import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <>
    <Router>
      <NavBar/>

      <Routes>
        <Route key={"home"} exact path="/" element={<Home/>}/>
      </Routes>

      <Routes>
        <Route key={"about"} exact path="/about" element={<About/>}/>
      </Routes>
      
    </Router>
      
    </>
)}

export default App;
