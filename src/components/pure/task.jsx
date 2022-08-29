import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';


const TaskComponent = ({ task }) => {

    useEffect(() => {
        console.log("tarea creada")
        return () => {
            console.log(`La tarea ${task.name} se esta desmontando`)
        };
    }, [task]);

    return (
        <div>
            <h2>
                Nombre: { task.name }
            </h2>
            <h3>
                Descripción: { task.description }
            </h3>
            <h4>
                Nivel: { task.level }
            </h4>
            <h5>
                Esta tarea está: {task.completed ? "completada" : "pendiente" }
            </h5>
        </div>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};


export default TaskComponent;
