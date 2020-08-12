import React from 'react';
import axios from 'axios';
import fish from '../assets/fish.png';
import poop from '../assets/poop.png';

function Postreactions(props) {
  function handleLike() {
    // console.log(props.postId);
    axios
      .put(
        `http://localhost:${process.env.PORT || 3000}/posts/${
          props.postId
        }/like`
      )
      // use below for production build
      // .put(`/posts/${props.postId}/like`)
      .then(() => {
        props.updateReactions();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleDislike() {
    axios
      .put(
        `http://localhost:${process.env.PORT || 3000}/posts/${
          props.postId
        }/dislike`
      )
      // use below for production build
      // .put(`/posts/${props.postId}/dislike`)
      .then(() => {
        props.updateReactions();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="reactions-container">
      <span className="likes-container" onClick={handleLike}>
        <img src={fish} alt="fish-icon" className="fish-icon"></img>
        <span className="reaction-count">
          {props.postLikes} {props.postLikes === 1 ? 'Like' : 'Likes'}
        </span>
      </span>
      <span className="dislikes-container" onClick={handleDislike}>
        <img src={poop} alt="poop-icon" className="poop-icon"></img>
        <span className="reaction-count">
          {props.postDislikes}{' '}
          {props.postDislikes === 1 ? 'Dislike' : 'Dislikes'}
        </span>
      </span>
    </div>
  );
}

export default Postreactions;
