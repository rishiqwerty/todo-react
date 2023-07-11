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
                {tasks.map((task,index) => (<div className="task"><p>{task.task}</p>{task.completed ? <b>Done</b> : <b></b>}
                    <div className="buttons">
                        <button id="completed" onClick={()=>completed(index)}>Completed</button>
                        <button onClick={()=>removeTask(index)}>X</button>
                    </div>
                </div>))}
            </div>
            <CreateNotes addNotes={addNotes}/>
        </>
    )
}


function CreateNotes({ addNotes }) {
    const [value, setValue] = useState('');
    const [isInputInvalid, setIsInputInvalid] = useState(false);
    function createNote(event) {
        event.preventDefault()
        if (value !== ""){
            addNotes(value)
            setValue('')
        }
        else{
            setIsInputInvalid(true);
        }
    }
    function handleKeypress(event){
        if (event.keyCode === 13){
            createNote(event)
        }
    }
    return (
    <div className="Notes">
      <input className= {isInputInvalid ? 'invalid-input' : ''} placeholder={isInputInvalid ? 'Please Enter Something' : 'Create a Task'} value={value} onKeyDown={handleKeypress} onChange={e => setValue(e.target.value)}></input>
      <button onClick={createNote}>Submit</button>
    </div>
  );
}

export default Todo;
