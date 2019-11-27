import React from 'react';
import TodoList from './TodoList'

const TodoListContainer = ({ checkboxHandler, editButtonHandler, deleteButtonHandler, items }) => {
  return (
    <TodoList
      checkboxHandler={checkboxHandler}
      editButtonHandler={editButtonHandler}
      deleteButtonHandler={deleteButtonHandler}
      items={items}
    />
  );
}

export default TodoListContainer;
