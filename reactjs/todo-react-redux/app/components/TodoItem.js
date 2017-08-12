import React from 'react';
import { ACTIONS } from '../constants';

class TodoItem extends React.Component {
  render() {
    const { todo, onClick, onDelete } =  this.props;
    let style;
    if(todo.completed) {
      style = {textDecoration:'line-through'};
    }
    return (
      <li>
        <span
          style={style} 
          onClick={() => onClick(todo.id)}
        >
          {todo.text}
        </span>
        <button
          onClick={() => onDelete(todo.id)}
        >
          x
        </button>
      </li>
    );
  }
}

export { TodoItem };
