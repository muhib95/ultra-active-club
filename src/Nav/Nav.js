import React from 'react';
import './Nav.css';
import logo from '../image/logo.jpg';
const Nav = () => {
  return (
    <div className='nav-bar'>
      <img src={logo} alt="" />
      <h1>ACTIVE-FOR-PROGRAMMING-HERO</h1>
    </div>
  );
};

export default Nav;