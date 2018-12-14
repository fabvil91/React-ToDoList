import React, { Component } from 'react';
import TodoElement from './TodoElement';

class TodoTable extends Component {
  
  render() {
    const listItems = this.props.lista.map((todo) =>
        <TodoElement key={todo.id}
                 id={todo.id}
                 text={todo.name}
                 onRemove={this.props.onTodoRemoved} />);

    return (
      <div>
          {listItems}
      </div>
    );
  }
}

export default TodoTable;