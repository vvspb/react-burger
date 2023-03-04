import React from 'react';
import BurgerIngredients from '../../components/burger-ingredients/Burger-ingredients';
import BurgerConstructor from '../../components/burger-constructor/Burger-constructor';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useSelector } from 'react-redux';
import { IIngredientsReducer } from '../../services/reducers/burger-ingredients-list-reducer';

import styles from './main-page.module.css'


const MainPage = () => {

  const { isLoading } = useSelector((state: {ingredients: IIngredientsReducer}) => state.ingredients)

  return (
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
  )
}

export default MainPage