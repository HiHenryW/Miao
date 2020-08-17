import React from 'react';
import { hot } from 'react-hot-loader/root';
import axios from 'axios';
import Navbar from './Components/navbar';
import Main from './Components/main';
import Profile from './Components/profile';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: 'hihenry',
      currentView: 'home',
      totalPosts: 0,
      users: [],
      posts: [],
    };

    this.updateReactions = this.updateReactions.bind(this);
    this.updateView = this.updateView.bind(this);
    this.countPosts = this.countPosts.bind(this);
    this.updateLocalStorage = this.updateLocalStorage.bind(this);
  }

  componentDidMount() {
    axios
      // .get(`http://localhost:${process.env.PORT || 3000}/users`)
      // use below for production build
      .get('/users')
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
      // .get(`http://localhost:${process.env.PORT || 3000}/posts`)
      // use below for production build
      .get('/posts')
      .then((res) => {
        // console.log(res.data);
        this.setState(
          {
            posts: res.data,
          },
          () => {
            this.setState({
              totalPosts: this.countPosts(res.data, this.state.currentUser),
            });
          }
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  updateReactions() {
    axios
      // .get(`http://localhost:${process.env.PORT || 3000}/posts`)
      // use below for production build
      .get('/posts')
      .then((res) => {
        this.setState({
          posts: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  updateView(newView) {
    this.setState({
      currentView: newView,
    });
  }

  countPosts(array, currentUser) {
    let postCount = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i].username === currentUser) {
        postCount += 1;
      }
    }
    return postCount;
  }

  updateLocalStorage(postId, action) {
    if (!window.localStorage.getItem('reactedPosts')) {
      let storedIds;
      if (action === 'like') {
        storedIds = { likes: [postId], dislikes: [] };
      } else if (action === 'dislike') {
        storedIds = { likes: [], dislikes: [postId] };
      }
      window.localStorage.setItem('reactedPosts', JSON.stringify(storedIds));
    } else {
      const oldIds = JSON.parse(window.localStorage.getItem('reactedPosts'));
      if (action === 'like') {
        oldIds.likes.push(postId);
      } else if (action === 'dislike') {
        oldIds.dislikes.push(postId);
      }
      window.localStorage.setItem('reactedPosts', JSON.stringify(oldIds));
    }
  }

  render() {
    if (this.state.currentView === 'home') {
      return (
        <>
          <div className="nav-wrapper">
            <Navbar
              users={this.state.users}
              currentUser={this.state.currentUser}
              currentView={this.state.currentView}
              updateView={this.updateView}
            />
          </div>
          <div className="nav-whitespace"></div>
          <div className="main-wrapper">
            <Main
              users={this.state.users}
              posts={this.state.posts}
              updateReactions={this.updateReactions}
              updateView={this.updateView}
              updateLocalStorage={this.updateLocalStorage}
            />
          </div>
        </>
      );
    } else if (this.state.currentView === 'profile') {
      return (
        <>
          <div className="nav-wrapper">
            <Navbar
              users={this.state.users}
              currentUser={this.state.currentUser}
              currentView={this.state.currentView}
              updateView={this.updateView}
            />
          </div>
          <div className="nav-whitespace"></div>
          <div className="main-wrapper-profile">
            <Profile
              users={this.state.users}
              currentUser={this.state.currentUser}
              posts={this.state.posts}
              totalPosts={this.state.totalPosts}
              updateReactions={this.updateReactions}
              updateLocalStorage={this.updateLocalStorage}
            />
          </div>
        </>
      );
    } else if (this.state.currentView === 'whatdoesthefoxsay') {
      return (
        <>
          <div className="nav-wrapper">
            <Navbar
              users={this.state.users}
              currentUser={this.state.currentUser}
              currentView={this.state.currentView}
              updateView={this.updateView}
            />
          </div>
          <div className="nav-whitespace"></div>
          <div className="main-wrapper-profile">
            <Profile
              users={this.state.users}
              currentUser={'whatdoesthefoxsay'}
              posts={this.state.posts}
              totalPosts={this.state.totalPosts}
              updateReactions={this.updateReactions}
              updateLocalStorage={this.updateLocalStorage}
            />
          </div>
        </>
      );
    } else if (this.state.currentView === 'skinnygrizzly') {
      return (
        <>
          <div className="nav-wrapper">
            <Navbar
              users={this.state.users}
              currentUser={this.state.currentUser}
              currentView={this.state.currentView}
              updateView={this.updateView}
            />
          </div>
          <div className="nav-whitespace"></div>
          <div className="main-wrapper-profile">
            <Profile
              users={this.state.users}
              currentUser={'skinnygrizzly'}
              posts={this.state.posts}
              totalPosts={this.state.totalPosts}
              updateReactions={this.updateReactions}
              updateLocalStorage={this.updateLocalStorage}
            />
          </div>
        </>
      );
    }
  }
}

export default hot(App);
