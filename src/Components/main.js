import React from 'react';
import PostContainer from './postcontainer';

function Main(props) {
  return props.posts.map((post) => (
    <div className="main-container">
      <PostContainer
        username={post.username}
        users={props.users}
        postImage={post.postImage}
        postLikes={post.postLikes}
        postDislikes={post.postDislikes}
        postDesc={post.postDesc}
        postId={post.postId}
        updateReactions={post.updateReactions}
      />
    </div>
  ));
}

export default Main;
