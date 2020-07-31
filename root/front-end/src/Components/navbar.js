import React from 'react';
import logo from '../../logo/miao-logo.png';

function Navbar(props) {
  return (
    <div className="navbar-container">
      <img src={logo} alt="miao-logo" className="miao-logo"></img>
      <input className="searchbar" type="text" placeholder="Search"></input>
      <p>
        <img alt="home icon placeholder"></img>
        <img alt="profile icon placeholder"></img>
      </p>
    </div>
  );
}

export default Navbar;
