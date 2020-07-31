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
    };
  }

  componentDidMount() {
    console.log('componentDidMount entered!');
    axios
      .get('http://localhost:3000/users')
      .then((res) => {
        console.log(res.data);
        this.setState({
          username: res.data[0].username,
          proPic: res.data[0].profilePic,
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
        <Main username={this.state.username} proPic={this.state.proPic} />
      </>
    );
  }
}

export default hot(App);
