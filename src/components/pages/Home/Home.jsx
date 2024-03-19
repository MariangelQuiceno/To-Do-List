import React from 'react'
import { Header } from '../../layouts/Header'
import { Main } from '../../layouts/Main'
import { Footer } from '../../layouts/Footer'
import IconHeader from '../../../assets/Iconos/huron.png'
import { Filter } from '../../filter/Filter'
import { Tasks } from '../../tasks/Tasks'
import './homeStyle.css'
import { ItemTasks } from '../../itemTask/ItemTasks'




export const Home = () => {
  return (
    <div className='father-all'>
        <Header>
            <h1 className='h1-Header'>Lista de Tareas</h1>
            <img className='Icon' src={IconHeader} alt="Icono" />
        </Header>

        <Main>
          <Filter/>

          <div className='view-list-task'>
          <Tasks>
            <ItemTasks title={'s'} desc={'s'} />
          </Tasks>
          </div>
        
        </Main>

        <Footer>
        <h1 className='h1-Footer'>Hola :3</h1>
        </Footer>
    </div>
  )
}
