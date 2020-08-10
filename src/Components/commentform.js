import React from 'react';
import axios from 'axios';
import { ConnectionStates } from 'mongoose';

class Commentform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentText: '',
    };

    this.clearText = this.clearText.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  clearText() {
    this.setState({ commentText: '' });
  }

  handleChange(event) {
    this.setState({
      commentText: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
      .post(
        `http://localhost:${process.env.PORT || 3000}/posts/${
          this.props.postId
        }`,
        {
          commentText: this.state.commentText,
          userName: 'hihenry',
        }
      )
      // use below for production build
      // .post(`/posts/${this.props.postId}`,
      //   {
      //     commentText: this.state.commentText,
      //     userName: 'hihenry',
      //   })
      .then((res) => {
        // console.log(res);
        this.clearText();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <section className="comment-form-container">
        <div>
          <form className="comment-form" onSubmit={this.handleSubmit}>
            <textarea
              placeholder="Add a comment..."
              value={this.state.commentText}
              onChange={this.handleChange}
            ></textarea>
            <button type="submit">Post</button>
          </form>
        </div>
      </section>
    );
  }
}

export default Commentform;
