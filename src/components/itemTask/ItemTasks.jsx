import React from 'react';
import './itemTaskStyle.css';

export const ItemTasks = ({ id, title, desc, state, onChange }) => {
    return (
        <div className='list-component' id={id}>
            <li id={`titleTask_${id}`}>
                Nombre de la Tarea: <span>{title}</span>{' '}
                <input
                    type="checkbox"
                    id={`cbox_${id}`}
                    checked={state}
                    onChange={(e) => onChange(e, id)} // Pasamos el evento y el ID de la tarea al onChange
                />
            </li>
            <p id={`descriptionTask_${id}`}>Descripción: <span>{desc}</span></p>
        </div>
    );
};
