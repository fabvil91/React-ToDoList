import React, { Component } from 'react';

class TodoElement extends Component {
  handleClick = () => {
    this.props.onRemove(this.props.id);
  }
  
  render() {
    return (
      <div>
          <input type="button" value={this.props.text} onClick={this.handleClick}/>
      </div>
    );
  }
}

export default TodoElement;