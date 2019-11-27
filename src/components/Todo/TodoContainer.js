import React, { Component } from 'react';
import Todo from './Todo';
import { toast } from 'react-toastify';

class TodoContainer extends Component {
  state = {
    items: [],
    term: "",
    flg: false,
    id: 0,
    isChecked: false,
  }

  componentDidUpdate() {
    localStorage.setItem('todos', JSON.stringify(this.state.items));
  }

  checkboxHandler = (e, id) => {
    toast(this.state.items[id]);
  }

  deleteButtonHandler = (e, id) => {
    this.setState((prevState, props) => {
      const deletedItem = prevState.items.splice(id, 1);
      const splicedList = prevState.items.filter(i => i = deletedItem);
      return ({
        items: [...splicedList],
      })
    });
  }

  editButtonHandler = (event, id) => {
    this.setState((prevState, props) => ({
      term: prevState.items[id],
      id,
      flg: true,
    }));
  }

  optionInputHandler = event => {
    const e = event.target;
    this.setState(prevState => ({
      term: e.value,
    }));
  }

  addButtonHandler = () => {
    this.setState(prevState => ({
      items: [...prevState.items, prevState.term],
      term: "",
      flg: false,
    }));
  }

  updateButtonHandler = () => {
    this.setState(prevState => {
      prevState.items.splice(prevState.id, 1, prevState.term);
      return ({
        items: prevState.items,
        term: "",
        flg: false,
      })
    });
  }

  render() {
    const { items, flg, term } = this.state;
    return (
      <Todo
        optionInputHandler={this.optionInputHandler}
        addButtonHandler={this.addButtonHandler}
        updateButtonHandler={this.updateButtonHandler}
        checkboxHandler={this.checkboxHandler}
        editButtonHandler={this.editButtonHandler}
        deleteButtonHandler={this.deleteButtonHandler}
        items={items}
        flg={flg}
        term={term} />
    );
  }
}

export default TodoContainer;