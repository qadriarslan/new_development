import React from 'react';
import { ACTIONS } from '../constants';

class AddTodo extends React.Component {
  addTodo() {
    const { store } = this.props;
    const text = this.todoText.value;
    const id = Date.now();
    store.dispatch({
      type: ACTIONS.ADD_TODO, 
      id: id, 
      text: text
    });
    this.todoText.value = '';
  }
  render() {
    return (
      <div>
        <input 
          type="text"
          ref={textInput => (this.todoText = textInput)}
        />
        <button onClick={this.addTodo.bind(this)}>
          Add Todo
        </button>
      </div>
    );
  }
}

export { AddTodo };
