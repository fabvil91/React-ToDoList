import React, { Component } from 'react';

class TodoHeader extends Component {
  render() {
    return (
      <div>
         to-do ({this.props.list.length})
      </div>
    );
  }
}

export default TodoHeader;