import React from 'react';
import { TodoItem } from './TodoItem';

const TodoList = ({
  todos,
  onTodoClick,
  onTodoDelete
}) => (
  <ul>
    {todos.map(todo =>
      <TodoItem
        key={todo.id}
        todo={todo}
        onClick={onTodoClick}
        onDelete={onTodoDelete} />
    )}
  </ul>
);
export { TodoList };