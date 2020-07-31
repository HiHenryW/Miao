import React from 'react';

function Postimage(props) {
  return (
    <div className="postimage-container">
      <img className="postimage" src={props.postImage}></img>
    </div>
  );
}

export default Postimage;
