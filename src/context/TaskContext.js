import { createContext } from "react"

//nombre del contexto
export const TaskContext = createContext();
//componente que engloba
export function TaskContextProvider(props) {
    return(
        <TaskContextProvider>
            {props.children}
        </TaskContextProvider>

    )
}
