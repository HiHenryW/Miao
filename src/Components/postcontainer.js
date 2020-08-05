import React from 'react';
import Postheader from './postheader';
import Postimage from './postimage';
import Postreactions from './postreactions';
import Postdescription from './postdescription';
// import Postcomments from './postcomments';

function PostContainer(props) {
  return (
    <>
      <article>
        <Postheader username={props.username[0]} proPic={props.proPic[0]} />
        <Postimage postImage={props.postImage[0]} />
        <Postreactions
          postLikes={props.postLikes[0]}
          postDislikes={props.postDislikes[0]}
          postId={props.postId[0]}
          updateReactions={props.updateReactions}
        />
        <Postdescription
          postDesc={props.postDesc[0]}
          username={props.username[0]}
        />
        {/* <Postcomments /> */}
      </article>
    </>
  );
}

export default PostContainer;
