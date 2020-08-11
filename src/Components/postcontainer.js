import React from 'react';
import Postheader from './postheader';
import Postimage from './postimage';
import Postreactions from './postreactions';
import Postdescription from './postdescription';
import Postcomments from './postcomments';
import Timestamp from './timestamp';
import Commentform from './commentform';

function PostContainer(props) {
  return (
    <>
      <article>
        <Postheader username={props.username} users={props.users} />
        <Postimage postImage={props.postImage} />
        <Postreactions
          postLikes={props.postLikes}
          postDislikes={props.postDislikes}
          postId={props.postId}
          updateReactions={props.updateReactions}
        />
        <Postdescription postDesc={props.postDesc} username={props.username} />
        <Postcomments postId={props.postId} />
        <Timestamp createdAt={props.createdAt} />
        <Commentform postId={props.postId} />
      </article>
    </>
  );
}

export default PostContainer;
