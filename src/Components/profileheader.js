import React from 'react';

function Profileheader(props) {
  return (
    <header className="profile-header">
      <div className="profile-picture-wrapper">
        <img
          className="profile-picture"
          src={getProPic(props.users, props.currentUser)}
        ></img>
      </div>
      <section className="profile-details-wrapper">
        <div className="profile-username">{props.currentUser}</div>
        <ul className="profile-posts-follow">
          <li>
            <span className="profile-details-numbers">{props.totalPosts}</span>{' '}
            posts
          </li>
          <li>
            <span className="profile-details-numbers">X</span> followers
          </li>
          <li>
            <span className="profile-details-numbers">X</span> following
          </li>
        </ul>
        <div className="profile-description">Based in NYC currently.</div>
      </section>
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

export default Profileheader;
