import React from 'react';
import { ACTIONS } from '../util/constants';

class AddTodo extends React.Component {
  addTodo() {
    const { store } = this.props;
    const text = this.todoText.value.trim();
    if(!text) return;
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
          ref={node => (this.todoText = node)}
        />
        <button onClick={this.addTodo.bind(this)}>
          Add Todo
        </button>
      </div>
    );
  }
}

export { AddTodo };
