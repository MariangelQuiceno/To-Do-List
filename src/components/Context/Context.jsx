import React, { createContext, useState } from 'react';

export const tasksContext = createContext(); {/* Se crea el contexto */}

 {/*TaskProvider sirve como el proveedor del contexto creado anteriormente.*/}
export const TasksProvider = ({ children }) => {
   
    const [tasks, setTasks] = useState([]);


    {/* tasks almacena tareas. setTasks sirve para actualizar el estado de tasks. */}

    return (
        <tasksContext.Provider value={{ tasks, setTasks }}> {/*  valor que estará disponible globalmente */}
            {children}
        </tasksContext.Provider>
    );
};
