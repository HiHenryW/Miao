import React from 'react';
import { hot } from 'react-hot-loader/root';
import axios from 'axios';
import Navbar from './Components/navbar';
import Main from './Components/main';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: [],
      proPic: [],
      postImage: [],
      postLikes: [],
      postDislikes: [],
      postDesc: [],
      postId: [],
    };

    this.updateReactions = this.updateReactions.bind(this);
  }

  componentDidMount() {
    // console.log('componentDidMount entered!');
    axios
      .get('/users')
      .then((res) => {
        let usernames = [];
        let proPics = [];
        let container = {};
        for (let i = 0; i < res.data.length; i++) {
          usernames.push(res.data[i].username);
          proPics.push(res.data[i].profilePic);
        }
        container.username = usernames;
        container.proPic = proPics;
        return container;
      })
      .then((data) => {
        // console.log(data);
        this.setState({
          username: data.username,
          proPic: data.proPic,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get('/posts')
      .then((res) => {
        console.log(res.data);
        let postImages = [];
        let postLikes = [];
        let postDislikes = [];
        let postDescs = [];
        let postIds = [];
        let container = {};
        for (let i = 0; i < res.data.length; i++) {
          postImages.push(res.data[i].postImage);
          postLikes.push(res.data[i].postLikes);
          postDislikes.push(res.data[i].postDislikes);
          postDescs.push(res.data[i].postDesc);
          postIds.push(res.data[i]._id);
        }
        container.postImage = postImages;
        container.postLikes = postLikes;
        container.postDislikes = postDislikes;
        container.postDesc = postDescs;
        container.postId = postIds;
        return container;
      })
      .then((data) => {
        this.setState({
          postImage: data.postImage,
          postLikes: data.postLikes,
          postDislikes: data.postDislikes,
          postDesc: data.postDesc,
          postId: data.postId,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  updateReactions() {
    axios
      .get('/posts')
      .then((res) => {
        let postLikes = [];
        let postDislikes = [];
        let container = {};
        for (let i = 0; i < res.data.length; i++) {
          postLikes.push(res.data[i].postLikes);
          postDislikes.push(res.data[i].postDislikes);
        }
        container.postLikes = postLikes;
        container.postDislikes = postDislikes;
        return container;
      })
      .then((data) => {
        this.setState({
          postLikes: data.postLikes,
          postDislikes: data.postDislikes,
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
