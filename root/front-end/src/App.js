import React from 'react';
import { hot } from 'react-hot-loader/root';
import Navbar from './Components/navbar';
import Main from './Components/main';

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <Navbar />
        <Main />
      </>
    );
  }
}

export default hot(App);
