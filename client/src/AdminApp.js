import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./pages/adminPages/Dashboard/Dashboard";

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/products")
      .then((res) => res.json())
      .then((data) => setBackendData(data));
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>

        {typeof backendData.data === "undefined" ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {backendData.data.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        )}
      </div>
    </Router>
  );
}

export default App;
