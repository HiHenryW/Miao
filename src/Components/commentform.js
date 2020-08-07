import React from 'react';

function Commentform(props) {
  return (
    <section className="comment-form-container">
      <div>
        <form className="comment-form">
          <textarea placeholder="Add a comment..."></textarea>
          <button type="submit">Post</button>
        </form>
      </div>
    </section>
  );
}

export default Commentform;
