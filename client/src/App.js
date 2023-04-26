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
      {(typeof backendData.data === 'undefined') ? <p>Loading...</p> : 
        <ul>
          {backendData.data.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      }
    </div>
  )
}

export default App;
