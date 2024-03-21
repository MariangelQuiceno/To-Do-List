import React from 'react'
import './itemTaskStyle.css'
import { useState } from 'react';

let idCounter = 0;

const generateUniqueId = () => {
  idCounter++;
  return `task-${idCounter}`;
};

export const ItemTasks = ({ title, desc }) => {

  const [taskId] = useState(generateUniqueId());

  return (

    <div className='list-component' id={`task_${taskId}`}>
    <li id={`titleTask_${taskId}`}>Nombre de la Tarea: {title}  <input type="checkbox" id={`cbox_${taskId}`} /></li> 
      <p id={`descriptionTask_${taskId}`}>Descripción: {desc}</p>
    </div>
   
  );
};
