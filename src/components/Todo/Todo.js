import React from 'react';

import './Todo.css';
import TodoListContainer from '../TodoList/TodoListContainer';

const Todo = ({
  optionInputHandler,
  addButtonHandler,
  updateButtonHandler,
  checkboxHandler,
  editButtonHandler,
  deleteButtonHandler,
  items,
  term,
  flg, }) => {

  return (
    <div className="todo-container">
      <h1>What Should I do ?</h1>
      <div className="list-container">
        <div className="input-container">
          <input type="text" placeholder="Enter your option" onChange={optionInputHandler} value={term} />
          {(flg === false) ?
            <button type="submit" className="addBtn" disabled={!term} onClick={addButtonHandler}>Add</button> :
            <button type="submit" className="addBtn" onClick={updateButtonHandler}>Update</button>
          }
        </div>
        <TodoListContainer
          items={items}
          checkboxHandler={checkboxHandler}
          editButtonHandler={editButtonHandler}
          deleteButtonHandler={deleteButtonHandler} />
      </div>
    </div>
  );
}

export default Todo;