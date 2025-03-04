import { useState } from "react"
const TodoList = () => {
  const [tasks, setTasks] = useState(["walk the dog", "create a AI model"]);
    const [newTask, setNewTask] = useState("");
    
  
    
      const handleAddTask = () => {

        if(newTask.trim() !== ""){
          const task = newTask;
          setTasks((t)=>[...t, task]);
          setNewTask("");
        }

      }
  
      const handleRemoveTask = (index) => {
        setTasks((t)=>t.filter((_, i)=>{ return i !== index}));
      }
    
      const handleInput = (event)=>{
        setNewTask(event.target.value);
        }

      const moveTaskDown = (index)=>{
        if(index<tasks.length-1){
          const updatedTasks = [...tasks];
          [updatedTasks[index], updatedTasks[index+1]]=[updatedTasks[index+1], updatedTasks[index]];
          setTasks(updatedTasks);
        }
        
      }
    
      const moveTaskUp = (index)=>{
      if(index>0){
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index-1]]=[updatedTasks[index-1], updatedTasks[index]];
        setTasks(updatedTasks);
      }
      }
      
  


  return (  
    <div className="to-do-list">
      <h2>To-Do-List</h2>
      <input
      type="text"
      placeholder="Enter a Task"
      onChange={handleInput}
      value={newTask}
      />
      <button
      className="add-button"
      onClick={handleAddTask}
      >Add Task</button>

      <ol>
       {tasks.map((task, index)=>{
        return (<li key={index}>
          <span className="text">{task}</span>
          <button
          className="delete-button"
          onClick={()=>handleRemoveTask(index)}
          >  Delete</button>
          <button className="move-button"
          onClick={()=>moveTaskDown(index)}
          >  Down</button>
          <button className="move-button"
          onClick={()=>moveTaskUp(index)}
          >  Up</button>
          </li>)
       })}
      </ol>
    </div>
  )
}

export default TodoList
