import React from 'react';

function Profileheader(props) {
  return (
    <header className="profile-header">
      <div className="profile-picture-wrapper">
        <img className="profile-picture"></img>
      </div>
      <section className="profile-details-wrapper">
        <div className="profile-username"></div>
        <ul className="profile-posts-follow">
          <li>posts</li>
          <li>followers</li>
          <li>following</li>
        </ul>
        <div className="profile-description"></div>
      </section>
    </header>
  );
}

export default Profileheader;
