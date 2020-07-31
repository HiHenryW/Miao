import React from 'react';
import axios from 'axios';
import { GiMeat } from 'react-icons/gi';
import { FaPoop } from 'react-icons/fa';
import { IconContext } from 'react-icons';

function Postreactions(props) {
  function handleLike() {
    axios
      .put(`http://localhost:3000/posts/${props.postId}/like`)
      .then(() => {
        props.updateReactions();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleDislike() {
    axios
      .put(`http://localhost:3000/posts/${props.postId}/dislike`)
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
        <IconContext.Provider value={{ color: 'blue', size: '24px' }}>
          <GiMeat />
          {props.postLikes}
        </IconContext.Provider>
      </span>
      <span className="dislikes-container" onClick={handleDislike}>
        <IconContext.Provider value={{ color: 'brown', size: '15px' }}>
          <FaPoop />
          {props.postDislikes}
        </IconContext.Provider>
      </span>
    </div>
  );
}

export default Postreactions;
