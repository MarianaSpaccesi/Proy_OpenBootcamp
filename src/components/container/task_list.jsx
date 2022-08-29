import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from "../../models/task.class"
import TaskComponent from '../pure/task';


const TaskListComponent = () => {
    
    const defaultTask = new Task("Example", "Default description", false, LEVELS.NORMAL);

    //Estado del componente
    const [tasks, setTasks] = useState([defaultTask]);
    const [loading, setLoading] = useState(true);

    //Control del ciclo de vida del componente
    useEffect(() => {
        console.log("modificacion de tareas");
        setLoading(false);
        return() => {
            console.log("TaskList esta desmontandose");
        }
    }, [tasks])


    const changeCompleted = (id) =>{
        console.log("TODO: Cambiar estado de una tarea.")
    }

    return (
        <div>

            <div>
                <h1>
                    Tu tarea: 
                </h1>
            </div>
            {/*TODO aplicar un for/map para renderizar una lista de tareas*/}
            <TaskComponent task={defaultTask}/>
        </div>
    );
};

export default TaskListComponent;
