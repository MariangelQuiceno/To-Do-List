import React, { useState, useContext, useEffect } from 'react';
import './filterStyle.css';
import { tasksContext } from '../Context/Context';

let idCounter = 0;

const generateUniqueId = () => {
    idCounter++;
    return `task-${idCounter}`;
};
{/* Se utiliza contadores para generar ID's unicos que van incrementando */}


export const Filter = ({ setFilterOption }) => { {/* setFilterOption sirve para cambiar la opcion del filtro */}

    const context = useContext(tasksContext); {/* Accede al context y sus variables Globales */}

    {/* Estados  que se utilizan en el componente */}

    const maxCharacters = 250; // Caracteres Maximos
    const [textValue, setTextValue] = useState('');  // Contador Texto, caracteres
    const [taskCount, setTaskCount] = useState(0); //Contador de tareas
    const [pendingTaskCount, setPendingTaskCount] = useState(0); // Contador de tareas pendientes
    const [filterOption, setFilterOptionLocal] = useState("all"); // Opción de filtro, comienza en "Todas las Tareas"
    

    {/* 'useEffect' se utiliza para realizar efectos secundarios después de renderizar el componente. 
     Este actualiza el recuento de tareas y el recuento de tareas pendientes cuando cambia el estado global de las tareas. */}
    useEffect(() => {
        setTaskCount(context.tasks.length); //Cuenta las tareas

        // Cuenta las tareas pendientes
        const pendingTasks = context.tasks.filter(task => !task.state);
        setPendingTaskCount(pendingTasks.length);
    }, [context.tasks]);

    {/* Manejo de tareas*/}
    const handleCreateTask = (event) => {
        event.preventDefault();  {/* Evita que la pagina se recarge */}

        {/*Tarea y sus elementos */}
        const newTask = {
            id: generateUniqueId(),
            title: event.target.elements.title.value,
            description: event.target.elements.description.value,
            state: false // Nueva tarea comienza como pendiente
        };

        {/* Se agrega la nueva tarea y se actualizan los estados */}
        const updatedTasks = [...context.tasks, newTask]; 
        context.setTasks(updatedTasks);
        setTaskCount(updatedTasks.length);
        setPendingTaskCount(pendingTaskCount + 1); // Aumentar el contador de tareas pendientes
    };


    {/* Manejo de Caracteres en la Descripción */}
    const handleChangeCharacters = (event) => {
        if (event.target.value.length <= maxCharacters) {
            setTextValue(event.target.value);
        }
    };

    {/* Manejo del Filtro */}
    const handleFilterChange = (event) => {
        const option = event.target.value;
        setFilterOptionLocal(option); // Actualiza el estado local de la opción de filtro
        setFilterOption(option); // Llama a la función setFilterOption pasada como prop
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
