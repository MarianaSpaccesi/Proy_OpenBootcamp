import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from "../../models/task.class"
import TaskComponent from '../pure/task';
import '../../styles/task.scss'
import TaskForm from '../pure/form/taskForm';


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
        setTimeout(() => {
            setLoading(false);
        }, 2000)
        return() => {
            console.log("TaskList esta desmontandose");
        }
    }, [tasks])


    function completeTask(task) { 
        console.log("complete this task: ", task);
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask[index].completed = !tempTask[index].completed;
        /**Actualizamos el estado del componente con la nueva lista de tareas, y se actualizará la iteracion de las tareas mostrando la tarea actualizada. */
        setTasks(tempTask);
    }

    function removeTask(task) {
        console.log("Delete this task: ", task);
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask.splice(index, 1);
        setTasks(tempTask);
    }

    function addTask(task){
        console.log("Add this task: ", task);
        const tempTask = [...tasks]; 
        tempTask.push(task);
        setTasks(tempTask);
    }

    const Table = () =>{
        return(
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
                                <TaskComponent 
                                key={index} 
                                task={task} 
                                complete={completeTask}
                                remove={removeTask}/>
                            )
                        })}
                    </tbody>
            </table>
        )
    }

    let tasksTable 

    if (tasks.length > 0){
        tasksTable = <Table></Table>
    } else {
        tasksTable = (
            <div>
                <h3>No hay tareas para mostrar</h3>
            </div>
        )
    }

    const loadingStyle = {
        color: 'gray',
        fontSize: '30px',
        fontWeight: 'bold'
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    {/**Card header */}
                    <div className='card-header p-3'>
                        <h5>
                            Tus tareas: 
                        </h5>
                    </div>
                    {/**Card body (contenido) */}
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'} }>
                        {loading ? (<p style={loadingStyle}>Cargando tareas</p>) : tasksTable}
                    </div>
                </div>
            </div>
            <TaskForm add={addTask} length={tasks.length}></TaskForm>
        </div>
    );
};

export default TaskListComponent;
