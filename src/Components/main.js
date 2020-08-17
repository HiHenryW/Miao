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
        createdAt={post.createdAt}
        updateReactions={props.updateReactions}
        updateView={props.updateView}
        updateLocalStorage={props.updateLocalStorage}
      />
    </div>
  ));
}

export default Main;
