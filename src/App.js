import React from 'react';

import './App.css';
import TodoContainer from './components/Todo/TodoContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TODO App</h1>
      </header>
      <TodoContainer />
    </div>
  );
}

export default App;
