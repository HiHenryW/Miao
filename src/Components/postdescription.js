import React from 'react';

function Postdescription(props) {
  return (
    <div>
      <a className="username-container">{props.username}</a>
      <span className="post-description">{props.postDesc}</span>
    </div>
  );
}

export default Postdescription;
