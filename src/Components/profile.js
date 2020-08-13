import React from 'react';
import Profileheader from './profileheader';

function Profile(props) {
  return (
    <div>
      <Profileheader
        currentUser={props.currentUser}
        users={props.users}
        totalPosts={props.totalPosts}
      />
    </div>
  );
}

export default Profile;
