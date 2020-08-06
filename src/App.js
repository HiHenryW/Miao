import React from 'react';
import { hot } from 'react-hot-loader/root';
import axios from 'axios';
import Navbar from './Components/navbar';
import Main from './Components/main';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      posts: [],
    };

    this.updateReactions = this.updateReactions.bind(this);
  }

  componentDidMount() {
    axios
      .get(`http://localhost:${process.env.PORT || 3000}/users`)
      // use below for production build
      // .get('/users')
      .then((res) => {
        // console.log('users data:', res.data);
        this.setState({
          users: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`http://localhost:${process.env.PORT || 3000}/posts`)
      // use below for production build
      // .get('/posts')
      .then((res) => {
        this.setState({
          posts: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  updateReactions() {
    axios
      .get(`http://localhost:${process.env.PORT || 3000}/posts`)
      // use below for production build
      // .get('/posts')
      .then((res) => {
        this.setState({
          posts: res.data,
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
          users={this.state.users}
          posts={this.state.posts}
          updateReactions={this.updateReactions}
        />
      </>
    );
  }
}

export default hot(App);
