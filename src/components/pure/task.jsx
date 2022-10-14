import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import '../../styles/task.scss'
import { LEVELS } from '../../models/levels.enum';
//importamos la hoja de estilos de task.css

const TaskComponent = ({ task, complete, remove }) => {

    useEffect(() => {
        console.log("tarea creada")
        return () => {
            console.log(`La tarea ${task.name} se esta desmontando`)
        };
    }, [task]);

    /**
     * Function that return a Badge 
     * depending on the level of the task
     */
    function taskLevelBadge () {
        switch (task.level) {
            case LEVELS.NORMAL:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-primary'>
                            {task.level}
                        </span>
                    </h6>
                );
            case LEVELS.URGENT:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-warning'>
                            {task.level}
                        </span>
                    </h6>
                );
            case LEVELS.BLOCKING:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-danger'>
                            {task.level}
                        </span>
                    </h6>
                );
            default:
                break;
            }
        }

        /**Function that returns icon depending on completion of the task  */
        function taskCompleted () { 
            if(task.completed){
                return (<i onClick={() => complete(task)} className="bi bi-toggle-on task-action" style={{color: 'green'}}></i>);
            }else {
                return(<i onClick={() => complete(task)} className="bi bi-toggle-off task-action" style={{color:'grey'}}></i>);
            }
        }

        const tasksCompleted = {
            color: 'gray',
            textDecoration: 'line-through',
            fontWeight: 'bold'
        }

        const taskPending = {
            color: 'tomato',
            fontWeight: 'bold'
        }

    return (
        <tr className='fw-normal' style={task.completed ? tasksCompleted : taskPending}>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-middle'>
                <span>{task.description}</span>
            </td>
            <td className='align-middle'>
                {/* excecution of funtcion to return badge element*/}
                {taskLevelBadge()}
            </td>
            <td className='align-middle'>
                {taskCompleted()}

                <i onClick={() => {remove(task)}} className="bi-trash task-action" style={{color: 'tomato'}}></i>
            </td>

        </tr>


        
    
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default TaskComponent;
