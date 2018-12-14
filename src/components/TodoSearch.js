import React, { Component } from 'react';

class TodoSearch extends Component {
  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
     this.props.onTextEntered(e.target.value);
    }
  }

  handleText = (e) => {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <div>
          <input type="text" value={this.props.text} onChange={this.handleText} onKeyPress={this.handleKeyPress}></input>
      </div>
    );
  }
}

export default TodoSearch;