import './App.css';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    {id: 1, name: "Record Lectures", completed: false}, 
    {id: 2, name: "Take shower", completed: true}, 
    {id: 3, name: "Cook Dinner", completed: false}
  ]);

  const [show, setShow] = useState(true);

  function handleDelete(id){
    setTasks(tasks.filter(task => id !== task.id))
  }

    return (
      <div className='App'>
        <h1>TaskList</h1>
        <ul>
          <button className='trigger' onClick={() => setShow(!show)}>Toggle</button>
          { show && tasks.map((task) => (
            <li key={task.id} className={task.completed ? "completed" : "incompleted"}>
              <span>{task.id} - {task.name}</span>
              <button onClick={() => handleDelete(task.id)} className='delete'>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    )
}

export default App;
