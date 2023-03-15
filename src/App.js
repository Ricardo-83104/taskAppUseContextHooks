import './App.css';
import TaskList from './components/TaskList'
import TaskForm from "./components/TaskForm";
import {tasks as data} from "./data/tasks"
import { useState, useEffect } from "react";


function App() {

  const[tasks,setTasks]= useState([]);
//se ejecuta en el 1 render
useEffect(()=> {
setTasks(data)
}, [])

function createTask(task){
setTasks([...tasks, {
  title: task.title,
  id:task.length,
  description: task.description
}])

}

function deleteTask(taskId){
  // es diferente el id de la tarea al taskId que le están pasando?
  setTasks(tasks.filter(task=> task.id != taskId))
}

  return (
    <div>
      <TaskForm createTask={createTask}/>
      <TaskList tasks={tasks} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
