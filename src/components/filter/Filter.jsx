import React, { useState, useContext, useEffect } from 'react';
import './filterStyle.css';
import { tasksContext } from '../Context/Context';

export const Filter = () => {
    const context = useContext(tasksContext);
    
    const [textValue, setTextValue] = useState('');
    const [taskCount, setTaskCount] = useState(0); 
    const maxCharacters = 250;

    useEffect(() => {
        setTaskCount(context.tasks.length);
    }, [context.tasks]);

    const handleCreateTask = (event) => {
        event.preventDefault(); 
        const newTask = {
            title: event.target.elements.title.value,
            description: event.target.elements.description.value,
            state: false
        };
        let listTasks = [...context.tasks, newTask];
        context.setTasks(listTasks);
        setTaskCount(listTasks.length); 
    };

    const handleChangeCharacters = (event) => {
        if (event.target.value.length <= maxCharacters) {
            setTextValue(event.target.value);
        }
    };

    return (
        <div className='father-filter'>
            <form onSubmit={handleCreateTask}>
                <div className='inputs'>
                    <div className='organizer-filter'>
                        <h4>Nombre de la tarea:</h4>
                        <input className='title-task' type="text" placeholder="..." name="title" />
                    </div>
                    <div className='organizer-filter'>
                        <h4>Descripción de la tarea:</h4>
                        <textarea className='desc-task'
                            value={textValue}
                            onChange={handleChangeCharacters}
                            placeholder="..."
                            maxLength={maxCharacters}
                            name="description"
                        />
                        <p>Caracteres restantes: {maxCharacters - textValue.length}</p>
                    </div>
                </div>

                <div className='create-task-button'>
                    <button type="submit">Crear Tarea</button>
                </div>
            </form>

            <h2>Información de tareas: {taskCount}</h2>
            <hr></hr>

            <div className='filter'>
                <h3>Filtro de Tareas</h3>
                <select name="favoriteOnly" id="favoriteOnly">
                    <option>Todas las Tareas</option>
                    <option>Tareas Pendientes</option>
                    <option>Tareas Hechas</option>
                </select>
            </div>
        </div>
    );
};
