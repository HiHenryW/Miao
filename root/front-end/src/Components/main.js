import React from 'react';
import PostContainer from './postcontainer';

function Main(props) {
  return (
    <div className="main-container">
      <PostContainer username={props.username} proPic={props.proPic} />
    </div>
  );
}

export default Main;
