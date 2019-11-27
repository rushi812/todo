import React from 'react';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './TodoList.css';

const TodoList = ({ checkboxHandler, editButtonHandler, deleteButtonHandler, items }) => {

  return (
    <div >
      {
        items.map((item, i) => (
          <div className="list-items" key={i} >
            <input type="checkbox" onChange={event => checkboxHandler(event, i)} />
            <p><span className="spanItem">{i + 1}.</span>{item}</p>
            <ToastContainer transition={Zoom} />
            <button className="editBtn" onClick={event => editButtonHandler(event, i)}>Edit</button>
            <button className="deleteBtn" onClick={event => deleteButtonHandler(event, i)}>Remove</button>
          </div>
        ))
      }
    </div >
  );
}

export default TodoList;