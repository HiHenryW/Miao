import React from 'react';
import PostContainer from './postcontainer';

function Main(props) {
  return (
    <div className="main-container">
      <PostContainer
        username={props.username}
        proPic={props.proPic}
        postImage={props.postImage}
        postLikes={props.postLikes}
        postDislikes={props.postDislikes}
        postDesc={props.postDesc}
      />
    </div>
  );
}

export default Main;
