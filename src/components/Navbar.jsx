import React from 'react';
import { GoSearch } from 'react-icons/go'
import {GrCart } from 'react-icons/gr'
import Badge from '@mui/material/Badge';
const Navbar = () => {
  return (
      <div className='nav-container'>
          <div className="wrapper">  
        <div className="left">
          <div className="language">EN</div> 
          <div className="Search-container">
            <input type='text' placeholder='Search...'></input>
            <GoSearch style={{color:"gray",fontSize:"16px"}}/>
          </div> 
        </div>
        <div className="center">
          <div className="logo">
            <h1>KENO</h1>
          </div>
        </div>
        <div className="right">
          <div className="register">register</div>
          <div className="signin">signin</div>
          <Badge badgeContent={6} color="secondary" style={{marginLeft:"25px"}}>
            <GrCart/>
          </Badge>
        </div>
          </div>
    </div>
  );
}

export default Navbar;
