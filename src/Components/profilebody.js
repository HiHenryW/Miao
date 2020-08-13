import React from 'react';

function Profilebody(props) {
  return (
    <div className="photo-wrapper">
      {props.posts.map((post, i) => {
        if (post.username === props.currentUser) {
          return (
            <div className="photo-box" key={i}>
              <img src={post.postImage}></img>
            </div>
          );
        }
      })}
    </div>
  );
}

export default Profilebody;
