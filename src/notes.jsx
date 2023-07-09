import { useState } from "react";
import './App.css';
function Todo() {
    const [tasks, setTask] = useState([])
    const addNotes = task => {
        const newTasks = [...tasks, {task, completed:false}]
        setTask(newTasks);
    } 
    const completed = index => {
        const newTasks = [...tasks];
        console.log(index,newTasks[index]) 
        newTasks[index].completed = newTasks[index].completed ? false : true;
        setTask(newTasks);
    };
    const removeTask = index => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTask(newTasks);
    };
    return (
        <>
            <div className="tasks">
                {tasks.map((task,index) => (<div className="task"><p>{task.task}</p>{task.completed ? <b>Done</b> : <b></b>}<button onClick={()=>completed(index)}>Completed</button><button onClick={()=>removeTask(index)}>Delete</button></div>))}
            </div>
            <CreateNotes addNotes={addNotes}/>
        </>
    )
}


function CreateNotes({ addNotes }) {
    const [value, setValue] = useState('') 
    function createNote(event) {
        event.preventDefault()
        addNotes(value)
    }
    return (
    <div className="Notes">
      <input value={value} onChange={e => setValue(e.target.value)}></input>
      <button onClick={createNote}>Submit</button>
    </div>
  );
}

export default Todo;
