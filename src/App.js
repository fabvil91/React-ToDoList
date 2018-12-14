import React, { Component } from 'react';
import './App.css';
import TodoHeader from './components/TodoHeader';
import TodoSearch from './components/TodoSearch';
import TodoTable from './components/TodoTable';

class App extends Component {
  constructor(props){
    super(props);
    this.handleTodoToAdd = this.handleTodoToAdd.bind(this);
    this.handleTodoToView = this.handleTodoToView.bind(this);
    this.handleRemoveTodoList = this.handleRemoveTodoList.bind(this);
    this.state = {todoToAdd: '', todoList: []};
    this.todoCounter = 0;
  }

  handleTodoToAdd(toDo){
    let list = this.state.todoList;
    toDo = {id: this.getTodoCounter(),
            name: toDo};
    list.push(toDo);
    this.setState({todoToAdd: '',todoList: list});
  }

  handleTodoToView(toDo){
    this.setState({todoToAdd: toDo});
  }

  handleRemoveTodoList(id){
    let lista = this.state.todoList;
    lista = lista.filter(function( obj ) {
      return obj.id !== id;
    });
    this.setState({todoList:lista});
  }

  getTodoCounter(){
    this.todoCounter++;
    return this.todoCounter;
  }

  render() {
    const lista = this.state.todoList;
    const todoSearchText = this.state.todoToAdd;
    return (
      <div className="App">
        <TodoHeader className="App-header" list={lista}/>
        <TodoSearch text={todoSearchText} onChange={this.handleTodoToView} onTextEntered={this.handleTodoToAdd}/>
        <TodoTable lista={lista} onTodoRemoved={this.handleRemoveTodoList}/>
      </div>
    );
  }
}

export default App;