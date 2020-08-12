import React from 'react';
import logo from '../../logo/miao-logo.png';
import { AiFillHome, AiOutlineHome } from 'react-icons/ai';
import { IconContext } from 'react-icons';

function Navbar(props) {
  function getProPic(users, username) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].username === username) {
        return users[i].profilePic;
      }
    }
  }

  return (
    <div className="navbar-container">
      <img src={logo} alt="miao-logo" className="miao-logo"></img>
      <input className="searchbar" type="text" placeholder="Search"></input>
      <div className="navbar-icons-container">
        <a>
          <IconContext.Provider value={{ size: '22px' }}>
            <AiFillHome />
          </IconContext.Provider>
        </a>
        <a>
          <div className="profile-pic-container-navbar">
            <img
              className="profile-pic"
              src={getProPic(props.users, props.currentUser)}
            ></img>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
