import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import '../../styles/task.scss'
import { LEVELS } from '../../models/levels.enum';
//importamos la hoja de estilos de task.css

const TaskComponent = ({ task }) => {

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
                return (<i className="bi bi-toggle-on" style={{color: 'green'}}></i>);
            }else {
                return(<i className="bi bi-toggle-off" style={{color:'grey'}}></i>);
            }
        }

    return (
        <tr className='fw-normal'>
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

                <i className="bi-trash" style={{color: 'tomato'}}></i>
            </td>

        </tr>


        
    
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};


export default TaskComponent;
