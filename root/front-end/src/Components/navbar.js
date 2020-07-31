import React from 'react';

function Navbar(props) {
  return (
    <div className="navbar-container">
      <img alt="logo placeholder"></img>
      <input className="searchbar" type="text" placeholder="Search"></input>
      <p>
        <img alt="home icon placeholder"></img>
        <img alt="profile icon placeholder"></img>
      </p>
    </div>
  );
}

export default Navbar;
