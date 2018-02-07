import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: '',
    };
  }
  addTodo = (event) => {
    event.preventDefault();
    const todo = this.state.todos;
    todo.push(this.state.newTodo);
    const newTodos = [...todo];
    console.log(newTodos);
    this.setState({
      todos: newTodos,
      newTodo: '',
    });
  };
  updateTodo = (event) => {
    this.setState({
      newTodo: event.target.value,
    });
  };
  render() {
    return (
      <div className="todo-list">
        <ul>
          {this.state.todos.map((todo, i) => {
            return <Todo key={i} todo={todo} />
          })}
        </ul>
        <form onSubmit={this.addTodo}>
          <input
            id="todo-input"
            type="text"
            placeholder="New Todo"
            onChange={this.updateTodo}
            value={this.state.newTodo} />
          <input type="submit" value="Add" />
        </form>
      </div>
    )
  }
}

export default TodoList;
