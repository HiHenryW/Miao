import React from 'react';

class Searchform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };

    this.clearText = this.clearText.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  clearText() {
    this.setState({ searchText: '' });
  }

  handleChange(event) {
    this.setState({
      searchText: event.target.value,
    });
  }

  handleEnter(event) {
    const searchTerm = event.target.value;
    if (event.keyCode === 13) {
      for (let i = 0; i < this.props.users.length; i++) {
        if (this.props.users[i].username === searchTerm) {
          this.props.updateView(searchTerm);
          this.clearText();
        } else {
          this.clearText();
        }
      }
    }
  }

  render() {
    return (
      <input
        className="searchbar"
        type="text"
        placeholder="Search"
        value={this.state.searchText}
        onChange={this.handleChange}
        onKeyDown={this.handleEnter}
      ></input>
    );
  }
}

export default Searchform;
