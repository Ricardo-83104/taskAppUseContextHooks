import { computeHeadingLevel } from "@testing-library/react"
import { useState } from "react"

function TaskForm({createTask}){

//funciones
const[title,setTitle]=useState("")
const[description, setDescription]=useState("")

const handleSubmit=(e)=>{
    e.preventDefault()
    
    createTask({
        title,
        description
    })
    setTitle("")
    setDescription("")
}

    return(
        
        <form onSubmit={handleSubmit}>
            <input 
            placeholder="tarea"
            onChange={(e)=> setTitle(e.target.value)}           
            value={title}
            autoFocus
            />
            <textarea 
            placeholder="description"
            onChange={(e)=> setDescription(e.target.value)}
            value={description}
            >
            </textarea>
            <button>
                Guardar
            </button>
        
        </form>
    )
}
export default TaskForm