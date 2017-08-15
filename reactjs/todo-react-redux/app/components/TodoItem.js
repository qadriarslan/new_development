import React from 'react';
import { ACTIONS } from '../constants';

class TodoItem extends React.Component {
  render() {
    const { todo, onClick, onDelete } =  this.props;
    return (
      <li>
        <span
          style={{textDecoration: todo.completed ? 'line-through': 'none'}}
          onClick={() => onClick(todo.id)}
        >
          {todo.text}
        </span>
        {'  '}
        <button onClick={() => onDelete(todo.id)}>x</button>
      </li>
    );
  }
}

export { TodoItem };
