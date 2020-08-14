import React from 'react';
import Profileheader from './profileheader';
import Profilebody from './profilebody';

function Profile(props) {
  return (
    <div className="profile-body-wrapper">
      <Profileheader
        currentUser={props.currentUser}
        users={props.users}
        totalPosts={props.totalPosts}
      />
      <Profilebody
        currentUser={props.currentUser}
        posts={props.posts}
        users={props.users}
        updateReactions={props.updateReactions}
      />
    </div>
  );
}

export default Profile;
