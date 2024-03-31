import React, { useContext, useEffect, useState } from 'react';
import { Header } from '../../layouts/Header';
import { Main } from '../../layouts/Main';
import { Footer } from '../../layouts/Footer';
import { Filter } from '../../filter/Filter';
import { Tasks } from '../../tasks/Tasks';
import { ItemTasks } from '../../itemTask/ItemTasks';
import { tasksContext } from '../../Context/Context'; // Importa tasksContext desde el archivo donde está definido
import './homeStyle.css'

export const Home = () => {

  {/* Se encarga de actualizar el estado de las checkbox, falso o true*/}
  const handleCheckboxChange = (e, taskId) => {
    const updatedTasks = otherContext.tasks.map(task => {
        if (task.id === taskId) {
            return { ...task, state: e.target.checked };
        }
        return task;
    });
    otherContext.setTasks(updatedTasks);
  };

  const otherContext = useContext(tasksContext);

  // Estado para almacenar la opción de filtro seleccionada
  const [filterOption, setFilterOption] = useState("all");

  // Filtrar las tareas según la opción seleccionada
  const filteredTasks = otherContext.tasks.filter(task => {
    if (filterOption === "all") {
      return true;
    } else if (filterOption === "pending") {
      return !task.state;
    } else if (filterOption === "completed") {
      return task.state;
    }
  });

  {/* Imprime en la consola el array, solo para verificar */}
  useEffect(() => {
    console.log(otherContext.tasks);
  }, [otherContext.tasks]);

  return (
    <div className='father-all'>
      <Header>
        <h1 className='h1-Header'>Lista de Tareas</h1>
      </Header>

      <Main>
        <Filter setFilterOption={setFilterOption} />


        <div className='view-list-task'>
          <Tasks>
            {/* Iterar y generar as tareas que estan en el array*/}
            {filteredTasks.map(task => (
              <ItemTasks
                key={task.id}
                id={task.id}
                title={task.title}
                desc={task.description}
                state={task.state}
                onChange={(e) => handleCheckboxChange(e, task.id)}
              />
            ))}
          </Tasks>
        </div>
      </Main>

      <Footer>
        <h1 className='h1-Footer'>Hola :3</h1>
      </Footer>
    </div>
  );
};
