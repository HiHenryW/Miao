import React from 'react';

function Postheader(props) {
  return (
    <header className="postheader">
      <div className="profile-pic-container">
        <img
          className="profile-pic"
          src={getProPic(props.users, props.username)}
        ></img>
      </div>
      <div className="username-container">{props.username}</div>
    </header>
  );

  function getProPic(users, username) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].username === username) {
        return users[i].profilePic;
      }
    }
  }
}

export default Postheader;
