import React from 'react';
import { hot } from 'react-hot-loader/root';
import axios from 'axios';
import Navbar from './Components/navbar';
import Main from './Components/main';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      proPic: '',
      postImage: '',
      postLikes: 0,
      postDislikes: 0,
      postDesc: '',
      postId: '',
    };

    this.updateReactions = this.updateReactions.bind(this);
  }

  componentDidMount() {
    // console.log('componentDidMount entered!');
    axios
      .get('http://localhost:3000/users')
      .then((res) => {
        // console.log(res.data);
        this.setState({
          username: res.data[0].username,
          proPic: res.data[0].profilePic,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get('http://localhost:3000/posts')
      .then((res) => {
        console.log(res.data);
        this.setState({
          postImage: res.data[0].postImage,
          postLikes: res.data[0].postLikes,
          postDislikes: res.data[0].postDislikes,
          postDesc: res.data[0].postDesc,
          postId: res.data[0]._id,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  updateReactions() {
    axios
      .get('http://localhost:3000/posts')
      .then((res) => {
        this.setState({
          postLikes: res.data[0].postLikes,
          postDislikes: res.data[0].postDislikes,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <>
        <Navbar />
        <Main
          username={this.state.username}
          proPic={this.state.proPic}
          postImage={this.state.postImage}
          postLikes={this.state.postLikes}
          postDislikes={this.state.postDislikes}
          postDesc={this.state.postDesc}
          postId={this.state.postId}
          updateReactions={this.updateReactions}
        />
      </>
    );
  }
}

export default hot(App);
