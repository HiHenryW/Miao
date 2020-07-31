import React from 'react';

function Postheader(props) {
  return (
    <header className="postheader">
      <div className="profile-pic-container">
        <img className="profile-pic" src={props.proPic}></img>
      </div>
      <div className="username-container">{props.username}</div>
    </header>
  );
}

export default Postheader;
