import "./App.css";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <NavBar />
          <Routes>
            <Route key={"home"} exact path="/" element={<Home />} />
            
            <Route key={"about"} exact path="/about" element={<About />} />

            <Route key={"login"} exact path="/login" element={<Login />} />

            <Route key={"signup"} exact path="/signup" element={<SignUp />} />

          </Routes>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
