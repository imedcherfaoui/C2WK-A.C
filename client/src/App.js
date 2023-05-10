import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/userPages/Home/Home";
import NavigationBar from "./components/navbar/navbar";
import Register from "./pages/userPages/Register/Register";
import Login from "./pages/userPages/Login/Login";
import Profile from "./pages/userPages/Profile/Profile";

function App() {
  
  return (
    <>
      <NavigationBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/me" element={<Profile />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
