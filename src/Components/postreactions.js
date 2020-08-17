import React from 'react';
import axios from 'axios';
import fish from '../assets/fish.png';
import fishClicked from '../assets/fish-clicked.png';
import poop from '../assets/poop.png';
import poopClicked from '../assets/poop-clicked.png';

class Postreactions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likedPostIds: [],
      dislikedPostIds: [],
    };

    this.handleLike = this.handleLike.bind(this);
    this.handleDislike = this.handleDislike.bind(this);
  }

  componentDidMount() {
    const reactedPosts = JSON.parse(
      window.localStorage.getItem('reactedPosts')
    );
    if (reactedPosts) {
      this.setState({
        likedPostIds: reactedPosts.likes,
        dislikedPostIds: reactedPosts.dislikes,
      });
    }
  }

  handleLike() {
    if (this.state.likedPostIds.includes(this.props.postId)) {
      return;
    } else {
      axios
        // .put(
        //   `http://localhost:${process.env.PORT || 3000}/posts/${
        //     this.props.postId
        //   }/like`
        // )
        // use below for production build
        .put(`/posts/${this.props.postId}/like`)
        .then(() => {
          this.props.updateReactions();
        })
        .then(() => {
          this.props.updateLocalStorage(this.props.postId, 'like');
          let newIds = this.state.likedPostIds;
          newIds.push(this.props.postId);
          this.setState({
            likedPostIds: newIds,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  handleDislike() {
    if (this.state.dislikedPostIds.includes(this.props.postId)) {
      return;
    } else {
      axios
        // .put(
        //   `http://localhost:${process.env.PORT || 3000}/posts/${
        //     this.props.postId
        //   }/dislike`
        // )
        // use below for production build
        .put(`/posts/${this.props.postId}/dislike`)
        .then(() => {
          this.props.updateReactions();
        })
        .then(() => {
          this.props.updateLocalStorage(this.props.postId, 'dislike');
          let newIds = this.state.dislikedPostIds;
          newIds.push(this.props.postId);
          this.setState({
            dislikedPostIds: newIds,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  render() {
    return (
      <div className="reactions-container">
        <span className="likes-container" onClick={this.handleLike}>
          <img
            src={
              this.state.likedPostIds.includes(this.props.postId)
                ? fishClicked
                : fish
            }
            alt="fish-icon"
            className="fish-icon"
          ></img>
          <span className="reaction-count">
            {this.props.postLikes}{' '}
            {this.props.postLikes === 1 ? 'Like' : 'Likes'}
          </span>
        </span>
        <span className="dislikes-container" onClick={this.handleDislike}>
          <img
            src={
              this.state.dislikedPostIds.includes(this.props.postId)
                ? poopClicked
                : poop
            }
            alt="poop-icon"
            className="poop-icon"
          ></img>
          <span className="reaction-count">
            {this.props.postDislikes}{' '}
            {this.props.postDislikes === 1 ? 'Dislike' : 'Dislikes'}
          </span>
        </span>
      </div>
    );
  }
}

export default Postreactions;
