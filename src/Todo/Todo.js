import React, { Component } from 'react';

import './Todo.css';
import TodoList from './TodoList';

class Todo extends Component {

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

  optionInputHandler = event => {

    this.setState({
      term: event.target.value,
    });
  }

  addButtonHandler = () => {
    this.setState(prevState => ({
      items: [...prevState.items, prevState.term],
      term: "",
      flg: false,
    }));
  }

  checkFunc = (id) => {
    // if (this.state.id === id) {
    //   this.setState({
    //     isChecked: !this.state.isChecked
    //   });
    // }
    // this.setState({
    //   items: this.state.items.map((item) => {
    //     if (item.id === id) {
    //       item.isChecked = !item.isChecked
    //     }
    //     return item;
    //   )
    // });
  }

  deleteFunc = (id) => {
    const deletedItem = this.state.items.splice(id, 1);
    const splicedList = this.state.items.filter(i => i = deletedItem);
    this.setState({
      items: [...splicedList],
    });
  }

  editFunc = (id) => {
    this.setState({
      term: this.state.items[id],
      id,
      flg: true,
    });
  }

  updateButtonHandler = () => {
    this.state.items.splice(this.state.id, 1, this.state.term);
    this.setState({
      items: this.state.items,
      term: "",
      flg: false,
    });
  }

  render() {
    const { items, term, flg, isChecked } = this.state;
    return (
      <div className="todo-container">
        <h1>What Should I do ?</h1>
        <div className="list-container">
          <div className="input-container">
            <input type="text" placeholder="Enter your option" onChange={this.optionInputHandler} value={term} />
            {(flg === false) ?
              <button type="submit" className="addBtn" disabled={!term} onClick={this.addButtonHandler}>Add</button> :
              <button type="submit" className="addBtn" onClick={this.updateButtonHandler}>Update</button>
            }
          </div>
          <TodoList
            checked={isChecked}
            tList={items}
            checkboxHandler={(id) => this.checkFunc(id)}
            deleteButtonHandler={(id) => this.deleteFunc(id)}
            editButtonHandler={(id) => this.editFunc(id)} />
        </div>
      </div>
    );
  }
}

export default Todo;