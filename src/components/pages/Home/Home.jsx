import React, { useContext, useEffect } from 'react';
import { Header } from '../../layouts/Header';
import { Main } from '../../layouts/Main';
import { Footer } from '../../layouts/Footer';
import IconHeader from '../../../assets/Iconos/huron.png';
import { Filter } from '../../filter/Filter';
import { Tasks } from '../../tasks/Tasks';
import { ItemTasks } from '../../itemTask/ItemTasks';
import { tasksContext } from '../../Context/Context'; // Importa tasksContext desde el archivo donde está definido
import './homeStyle.css'
export const Home = () => {
  
  const otherContext = useContext(tasksContext);
  
  useEffect(() => {
    console.log(otherContext.tasks);
  }, [otherContext.tasks]);

  return (
    <div className='father-all'>
        <Header>
            <h1 className='h1-Header'>Lista de Tareas</h1>
            
        </Header>

        <Main>
          <Filter/>

          <div className='view-list-task'>
            <Tasks>
                {
                  otherContext.tasks.map(task => <ItemTasks title={task.title} desc={task.description} />)
                }
            </Tasks>
          </div>
        </Main>

        <Footer>
          <h1 className='h1-Footer'>Hola :3</h1>
        </Footer>
    </div>
  );
};
