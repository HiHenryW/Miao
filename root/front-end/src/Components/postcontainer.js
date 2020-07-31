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
      <Postimage postImage={props.postImage} />
      <Postreactions
        postLikes={props.postLikes}
        postDislikes={props.postDislikes}
        postId={props.postId}
        updateReactions={props.updateReactions}
      />
      <Postdescription postDesc={props.postDesc} username={props.username} />
      {/* <Postcomments /> */}
    </article>
  );
}

export default PostContainer;
