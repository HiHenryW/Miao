import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Postcomments(props) {
  const [comments, setComments] = useState([]);

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
  });

  return (
    <div className="comment-list-container">
      {comments.map((comment, i) => {
        return (
          <div key={i}>
            <a>{comment.userName}</a>
            <span>{comment.commentText}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Postcomments;
