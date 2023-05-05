import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavbarData } from './navbardata';
import './navbar.css';
import { CiUser } from "react-icons/ci";
import { BsBasket3, BsSearch } from "react-icons/bs";
import logo from "./images/Logo.png";

export default function NavigationBar() {
  const navigate = useNavigate();

  function handleClick(link) {
    navigate(link);
  }
  function logout() {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/Login');
  }

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token') !== null);
  useEffect(() => {
    // Check if token exists in localStorage
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
  
  return (
    <div className="sidebar">
      <img className="Logo" src={logo} alt="logo" onClick={() => {handleClick("/");}}/>
      <ul className="sidebarList">
        {NavbarData.map((val, key) => {
          return (
            <li
              key={key}
              onClick={() => {
                handleClick(val.link);
              }}
              className="menu-sidebar"
            >
              <div>{val.title}</div>
            </li>
          );
        })}
      </ul>
      <div className="left-nav d-flex">
        <button className="deco btn">
            <BsSearch size={20} />
        </button>
        <button className="deco btn">
            <BsBasket3 size={20} />
        </button>
        <button className="deco btn">
            <CiUser size={20} />
        </button>
        <div>
        {isLoggedIn ? 
          <button className="deco btn border" onClick={logout}>
            Logout
          </button> 
          :
          <div>
            <button onClick={() => {
                      handleClick('/Register');
                    }} className="deco btn border">
                    Sign Up
              </button>
              <button onClick={() => {
                      handleClick('/Login');
                    }} className="deco btn border">
                    Sign In
              </button>
          </div>
        }
        </div>

            
      </div>
    </div>
  );
}
