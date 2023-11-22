import logo from './logo.svg';
import './App.css';
import React, { useState, useRef } from 'react';


function App() {
  const [task, setTask] = useState([]);
  const todoInputRef = useRef();

  const addItem = (e) => {
    e.preventDefault();
    const newItem = todoInputRef.current.value;
    if (newItem !== "") {
      setTask(prevTask => [...prevTask, newItem]);
    }
    todoInputRef.current.value = "";
  };

  const removeItem = (index, e) => {
    e.stopPropagation();
    const updatedTasks = task.filter((_, indx) => indx !== index);
    setTask(updatedTasks);
  };

  const renderTasks = () => {
    return task.map((task, index) => (
      <li key={index} className={index % 2 === 0 ? 'even' : 'odd'}>
        {task}
        <button className="remove" onClick={(e) => removeItem(index, e)}>x</button>
      </li>
    ));
  };

  return (
      <div className="ToDo">
        <h1>ToDo List</h1>
        <input type="text" className="enterItem" placeholder="Enter an item" ref={todoInputRef} />
        
        <ul className="todo-list">{renderTasks()}</ul>
        <button className="btn" onClick={addItem}>
          Add
        </button>

      </div>
  );
};

export default App;