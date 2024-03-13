import "./App.css";

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Aalert from "./components/Aalert";
import Addnote from "./components/Addnote";

function App() {
  const [alert, setAlert] = useState({});
  const showAlert = (message, type) => {
    setAlert({ message: message, type: type });
    setTimeout(() => {
      setAlert({});
    }, 3000);
  };

  return (
    <>
      <Router>
        <NavBar showAlert={showAlert} />
        <Aalert alert={alert} />
        <Routes>
          <Route
            key={"home"}
            exact
            path="/"
            element={<Home showAlert={showAlert} />}
          />

          <Route key={"about"} exact path="/about" element={<About />} />

          <Route
            key={"add"}
            exact
            path="/add"
            element={<Addnote showAlert={showAlert} />}
          />

          <Route
            key={"login"}
            exact
            path="/login"
            element={<Login showAlert={showAlert} />}
          />

          <Route
            key={"signup"}
            exact
            path="/signup"
            element={<SignUp showAlert={showAlert} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
