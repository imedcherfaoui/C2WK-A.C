import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavbarData } from './navbardata';
import './navbar.css';
import { CiUser } from "react-icons/ci";
import { BsBasket3, BsSearch } from "react-icons/bs";
import logo from "./images/Logo.png";
import AuthDetails from '../auth/AuthDetails';

export default function NavigationBar() {


  const navigate = useNavigate();
  return (
    <div className="sidebar">
      <img className="Logo" src={logo} alt="logo" onClick={() => navigate('/Home')}/>
      <ul className="sidebarList">
        {NavbarData.map((val, index) => {
          return (
            <ol key={index} className="menu-sidebar" onClick={() => navigate(val.link)}>
               { val.title } 
            </ol>
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
        <>
          <AuthDetails />
        </>

            
      </div>
    </div>
  );
}
