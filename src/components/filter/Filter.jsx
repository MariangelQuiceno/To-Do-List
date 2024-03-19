import React, {useState} from 'react';
import './filterStyle.css';


export const Filter = () => {

    
    const [textValue, setTextValue] = useState('');
    const maxCharacters = 250; 
  

  
    const handleChangeCharacters = (event) => {
      if (event.target.value.length <= maxCharacters) {
        setTextValue(event.target.value);
      }
    }

   

    return (
        <div className='father-filter'>
            <div className='inputs'>
                <div className='organizer-filter'>
                    <h4>Nombre de la tarea:</h4>
                    <input className='title-task' type="text" placeholder="..." />
                </div>
                <div className='organizer-filter'>
                    <h4>Descripción de la tarea:</h4>
                    <textarea className='desc-task'
                        value={textValue}
                        onChange={handleChangeCharacters} 
                        placeholder="..." 
                        maxLength={maxCharacters}
                    />
                    <p>Caracteres restantes: {maxCharacters - textValue.length}</p>
                </div>
            </div>

            <div className='create-task-button'>
                <button>Crear Tarea</button>
            </div>

            <h2>Información de tareas:</h2>
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
    )
}