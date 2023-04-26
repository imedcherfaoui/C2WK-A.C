import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/products")
      .then((res) => res.json())
      .then((data) => setBackendData(data));
  }, []);

  return (
    <div>
      {(typeof backendData === 'undefined') ? <p>Loading...</p> : 
        <ul>
          {backendData.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      }
    </div>
  )
}

export default App;
