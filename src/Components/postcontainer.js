import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Postheader from './postheader';
import Postimage from './postimage';
import Postreactions from './postreactions';
import Postdescription from './postdescription';
import Postcomments from './postcomments';
import Timestamp from './timestamp';
import Commentform from './commentform';

function PostContainer(props) {
  const [comments, setComments] = useState([]);
  const [reRender, forceReRender] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:${process.env.PORT || 3000}/posts/${props.postId}`)
      // use below for production build
      // .get(`/posts/${props.postId}`)
      .then((res) => {
        // console.log(res.data);
        setComments(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [reRender]);

  return (
    <>
      <article>
        <Postheader
          username={props.username}
          users={props.users}
          updateView={props.updateView}
        />
        <Postimage postImage={props.postImage} />
        <Postreactions
          postLikes={props.postLikes}
          postDislikes={props.postDislikes}
          postId={props.postId}
          updateReactions={props.updateReactions}
        />
        <Postdescription postDesc={props.postDesc} username={props.username} />
        <Postcomments comments={comments} />
        <Timestamp createdAt={props.createdAt} />
        <Commentform
          postId={props.postId}
          reRender={reRender}
          forceReRender={forceReRender}
        />
      </article>
    </>
  );
}

export default PostContainer;
