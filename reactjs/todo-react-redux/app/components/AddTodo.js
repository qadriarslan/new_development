import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let AddTodo = ({ dispatch }) => {
  let todoTextInput;
  return (
    <div>
      <input
        type="text"
        ref={node => (todoTextInput = node)}
      />
      <button onClick={() => {
        const text = todoTextInput.value.trim();
        if(!text) return;

        dispatch(addTodo(text));
        todoTextInput.value = '';
      }}>
        Add Todo
      </button>
    </div>
  );
};
AddTodo = connect()(AddTodo);

export { AddTodo };
