import React, { useState } from 'react';
import BurgerIngredients from '../../components/burger-ingredients/Burger-ingredients';
import BurgerConstructor from '../../components/burger-constructor/Burger-constructor';
import SumOrderContext from '../../contexts/sumOrderContext';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useSelector } from 'react-redux';

import styles from './main-page.module.css'

const MainPage = () => {

  const [sumOrder, setSumOrder] = useState(0)
  const { isLoading } = useSelector((state) => state)

  return (
    <div>
       <SumOrderContext.Provider value={{ sumOrder, setSumOrder }}>
        <main className={styles.main}>
          {
            isLoading ?
              <p className={styles.load}><span className='text text_type_main-medium'>идет загрузка...</span></p>
              :
              <DndProvider backend={HTML5Backend}>
                <BurgerIngredients />
                <BurgerConstructor />
              </DndProvider>
          }
        </main>
      </SumOrderContext.Provider>
    </div>
  )
}

export default MainPage