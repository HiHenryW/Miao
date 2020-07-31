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
      <article>
        <Postheader username={props.username[1]} proPic={props.proPic[1]} />
        <Postimage postImage={props.postImage[1]} />
        <Postreactions
          postLikes={props.postLikes[1]}
          postDislikes={props.postDislikes[1]}
          postId={props.postId[1]}
          updateReactions={props.updateReactions}
        />
        <Postdescription
          postDesc={props.postDesc[1]}
          username={props.username[1]}
        />
        {/* <Postcomments /> */}
      </article>
      <article>
        <Postheader username={props.username[2]} proPic={props.proPic[2]} />
        <Postimage postImage={props.postImage[2]} />
        <Postreactions
          postLikes={props.postLikes[2]}
          postDislikes={props.postDislikes[2]}
          postId={props.postId[2]}
          updateReactions={props.updateReactions}
        />
        <Postdescription
          postDesc={props.postDesc[2]}
          username={props.username[2]}
        />
        {/* <Postcomments /> */}
      </article>
    </>
  );
}

export default PostContainer;
