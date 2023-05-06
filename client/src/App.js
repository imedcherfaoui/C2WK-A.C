import "./App.css";
import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/userPages/Home/Home";
import Dashboard from "./pages/adminPages/Dashboard/Dashboard";
import Index from "./pages/adminPages/Dashboard/scenes/dashboard/index";
import Users from "./pages/adminPages/Dashboard/scenes/users/users";
import Products from "./pages/adminPages/Dashboard/scenes/products/products";
import Orders from "./pages/adminPages/Dashboard/scenes/orders/orders";
import AddUser from "./pages/adminPages/Dashboard/scenes/form/AddUser";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Dashboard/" element={<Dashboard />}>
            <Route path="index" element={<Index />} />
            <Route path="users" element={<Users />} />
            <Route path="products" element={<Products />} />
            <Route path="orders" element={<Orders />} />
            <Route path="addUser" element={<AddUser />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
