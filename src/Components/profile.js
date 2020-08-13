import React from 'react';
import Profileheader from './profileheader';
import Profilebody from './profilebody';

function Profile(props) {
  return (
    <div>
      <Profileheader
        currentUser={props.currentUser}
        users={props.users}
        totalPosts={props.totalPosts}
      />
      <Profilebody currentUser={props.currentUser} posts={props.posts} />
    </div>
  );
}

export default Profile;
