import { useEffect, useState } from "react";
import TaskCard from "./TaskCard";


function TaskList({tasks, deleteTask}) {
    if (tasks.length === 0) {
        return <h1>no hay tareas</h1>
    }

    return (
        <div>
            {tasks.map((task) => (
                <TaskCard Key={task.id} task={task} deleteTask={deleteTask} />
            ))}
        </div>
    )

}
export default TaskList

