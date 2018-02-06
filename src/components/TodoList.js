import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: '',
    };
    console.log('TodoList');
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.todos.map((todo, i) => {
            return <li key={i}>{ todo }</li>
          })}
        </ul>
        <form>
          <input type="text" placeholder="New Todo" />
        </form>
      </div>
    )
  }
}

export default TodoList;
