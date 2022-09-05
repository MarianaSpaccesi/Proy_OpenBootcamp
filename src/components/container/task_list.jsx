import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from "../../models/task.class"
import TaskComponent from '../pure/task';
import '../../styles/task.scss'
import TaskForm from '../pure/form/task.form';


const TaskListComponent = () => {
    
    const defaultTask1 = new Task("Example 1", "Default description 1", true, LEVELS.NORMAL);
    const defaultTask2 = new Task("Example 2", "Default description 2", false, LEVELS.URGENT);
    const defaultTask3 = new Task("Example 3", "Default description", false, LEVELS.BLOCKING);


    //Estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3 ]);
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
            <div className='col-12'>
                <div className='card'>
                    {/**Card header */}
                    <div className='card-header p-3'>
                        <h5>
                            Tu tarea: 
                        </h5>
                    </div>
                    {/**Card body (contenido) */}
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'} }>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Título</th>
                                    <th scope='col'>Descripción</th>
                                    <th scope='col'>Prioridad</th>
                                    <th scope='col'>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tasks.map((task, index) => {
                                    return(
                                        <TaskComponent key={index} task={task}/>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <TaskForm></TaskForm>
                </div>
            </div>
            {/*TODO aplicar un for/map para renderizar una lista de tareas*/}
{/*             <TaskComponent task={defaultTask}/>*/}        
        </div>
    );
};

export default TaskListComponent;
