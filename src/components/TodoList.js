import React, { Component } from 'react';
import { render } from 'react-dom';
import Todo from './Todo';

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: [];
    }
  }
  render() {
    return (
      <input type="text" />
    )
  }
}

export default TodoList;
