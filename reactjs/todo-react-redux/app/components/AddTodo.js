import React from 'react';
import { ACTIONS } from '../util/constants';

const AddTodo = ({ store }) => {
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

        store.dispatch({
          type: ACTIONS.ADD_TODO,
          id: Date.now(),
          text: text
        });
        todoTextInput.value = '';
      }}>
        Add Todo
      </button>
    </div>
  );
}
export { AddTodo };
