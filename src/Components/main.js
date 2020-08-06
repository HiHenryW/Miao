import React from 'react';
import PostContainer from './postcontainer';

function Main(props) {
  return props.posts.map((post, i) => (
    <div className="main-container" key={i}>
      <PostContainer
        username={post.username}
        users={props.users}
        postImage={post.postImage}
        postLikes={post.postLikes}
        postDislikes={post.postDislikes}
        postDesc={post.postDesc}
        postId={post._id}
        updateReactions={props.updateReactions}
      />
    </div>
  ));
}

export default Main;
