import React from "react";
import {tasks} from "../data/tasks"

function TaskCard({task, deleteTask}) {

function eliminarTarea(){
    
}    
    return(
        <div>
                <h1>{task.title}</h1>
                <p>{task.description}</p>
                <button 
                onClick={()=> deleteTask(task.id)}
                >Eliminar</button>
                </div>
    )
}
export default TaskCard