import React from 'react';

function Postdescription(props) {
  return (
    <div className="description-container">
      <a className="username-container">{props.username}</a>
      <span className="post-description">{props.postDesc}</span>
    </div>
  );
}

export default Postdescription;
