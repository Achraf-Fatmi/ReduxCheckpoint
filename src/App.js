import React from 'react';
import './App.css';
import ListTask from './Components/ListTask';
import AddTask from './Components/AddTask';
function App() {
  return (
    <div className="App">
      <h1>To Do List</h1>
      <div>
        <AddTask/>
      </div>
      <div className='Content'>
      <ListTask/>
      </div>

    </div>
  );
}

export default App;
