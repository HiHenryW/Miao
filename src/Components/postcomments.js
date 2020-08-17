import React from 'react';

function Postcomments(props) {
  return (
    <div className="comment-list-container">
      {props.comments.map((comment, i) => {
        return (
          <div key={i} className="comment-list-item">
            <a className="comment-list-user">{comment.userName}</a>
            <span>{comment.commentText}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Postcomments;
