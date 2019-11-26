import React from 'react';
import styled from 'styled-components';

import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './TodoList.css';

const SPAN = styled.span`
  padding: 2px;
  margin-right: 1rem;
`;


export default function TodoList(props) {

  const { tList } = props;

  const deleteButtonHandler = i => props.deleteButtonHandler(i);
  const editButtonHandler = i => props.editButtonHandler(i);
  const checkboxHandler = i => {
    props.checkboxHandler(i);
    toast(props.tList[i]);
  }

  return (
    <div >
      {
        tList.map((item, i) => (
          <div className="list-items" key={i} >
            <input type="checkbox" onChange={() => checkboxHandler(i)} />
            <p><SPAN>{i + 1}.</SPAN>{item}</p>
            <ToastContainer transition={Zoom} />
            <button className="editBtn" onClick={() => editButtonHandler(i)}>Edit</button>
            <button className="deleteBtn" onClick={() => deleteButtonHandler(i)}>Remove</button>
          </div>
        ))
      }
    </div >
  );
};

// (!this.props.checked) ? "striked" : null