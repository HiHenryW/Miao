import React from 'react';
import Postheader from './postheader';
import Postimage from './postimage';
import Postreactions from './postreactions';
import Postdescription from './postdescription';
// import Postcomments from './postcomments';

function PostContainer(props) {
  return (
    <article>
      <Postheader username={props.username} proPic={props.proPic} />
      <Postimage />
      <Postreactions />
      <Postdescription />
      {/* <Postcomments /> */}
    </article>
  );
}

export default PostContainer;
