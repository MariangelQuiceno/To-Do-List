import React, { useState, useContext, useEffect } from 'react';
import './filterStyle.css';
import { tasksContext } from '../Context/Context';

let idCounter = 0;

const generateUniqueId = () => {
    idCounter++;
    return `task-${idCounter}`;
};

export const Filter = ({ setFilterOption }) => { // Añade setFilterOption como prop

    const context = useContext(tasksContext);

    const [textValue, setTextValue] = useState('');
    const [taskCount, setTaskCount] = useState(0);
    const [pendingTaskCount, setPendingTaskCount] = useState(0); // Contador de tareas pendientes
    const [filterOption, setFilterOptionLocal] = useState("all"); // Opción de filtro, comienza en "Todas las Tareas"
    const maxCharacters = 250;

    useEffect(() => {
        setTaskCount(context.tasks.length);

        // Contar tareas pendientes
        const pendingTasks = context.tasks.filter(task => !task.state);
        setPendingTaskCount(pendingTasks.length);
    }, [context.tasks]);

    const handleCreateTask = (event) => {
        event.preventDefault();

        const newTask = {
            id: generateUniqueId(),
            title: event.target.elements.title.value,
            description: event.target.elements.description.value,
            state: false // Nueva tarea comienza como pendiente
        };

        const updatedTasks = [...context.tasks, newTask];
        context.setTasks(updatedTasks);
        setTaskCount(updatedTasks.length);
        setPendingTaskCount(pendingTaskCount + 1); // Aumentar el contador de tareas pendientes
    };

    const handleChangeCharacters = (event) => {
        if (event.target.value.length <= maxCharacters) {
            setTextValue(event.target.value);
        }
    };

    const handleFilterChange = (event) => {
        const option = event.target.value;
        setFilterOptionLocal(option); // Actualiza el estado local de la opción de filtro
        setFilterOption(option); // Llama a la función setFilterOption pasada como prop
    };

    let filteredTasks = context.tasks;
    if (filterOption === "pending") {
        filteredTasks = context.tasks.filter(task => !task.state);
    } else if (filterOption === "completed") {
        filteredTasks = context.tasks.filter(task => task.state);
    }

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
                        <p className='text-counter'>Caracteres restantes: {maxCharacters - textValue.length}</p>
                    </div>


                </div>

                <div className='create-task-button'>
                    <button type="submit">Crear Tarea</button>
                </div>
            </form>

            <h2>Información de tareas</h2>
            <h3>Total de Tareas: {taskCount}</h3>
            <h3>Tareas Pendientes: {pendingTaskCount}</h3>
            <h3>Tareas Realizadas: {taskCount - pendingTaskCount}</h3>
            <hr></hr>

            <div className='filter'>
                <h3>Filtro de Tareas</h3>
                <select name="filterOption" value={filterOption} onChange={handleFilterChange}>
                    <option value="all">Todas las Tareas</option>
                    <option value="pending">Tareas Pendientes</option>
                    <option value="completed">Tareas Hechas</option>
                </select>
            </div>

        </div>
    );
};
