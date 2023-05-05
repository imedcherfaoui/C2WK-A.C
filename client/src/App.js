import "./App.css";
import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/userPages/Home/Home";
import NavigationBar from "./components/navbar/navbar/navbar";
import Register from "./pages/userPages/Register/Register";
import Login from "./pages/userPages/Login/Login";

function App() {
  
  return (
    <Router>
      <NavigationBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
