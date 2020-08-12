import React from 'react';
import { hot } from 'react-hot-loader/root';
import axios from 'axios';
import Navbar from './Components/navbar';
import Main from './Components/main';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: 'hihenry',
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
        <div className="nav-wrapper">
          <Navbar
            users={this.state.users}
            currentUser={this.state.currentUser}
          />
        </div>
        <div className="nav-whitespace"></div>
        <div className="main-wrapper">
          <Main
            users={this.state.users}
            posts={this.state.posts}
            updateReactions={this.updateReactions}
          />
        </div>
      </>
    );
  }
}

export default hot(App);
