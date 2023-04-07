import React from 'react';
import BurgerIngredients from '../../components/burger-ingredients/Burger-ingredients';
import BurgerConstructor from '../../components/burger-constructor/Burger-constructor';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useSelector } from '../../hooks/hooks';
import Footer from '../../components/footer/Footer';

import styles from './main-page.module.css'


const MainPage = () => {

  const { isLoading } = useSelector(state => state.ingredients);
  const screenWidth = window.screen.width;

  return (
    <>
      <main className={styles.main}>
        {
          isLoading ?
            <p className={styles.load}><span className='text text_type_main-medium'>идет загрузка...</span></p>
            :
              <DndProvider backend={HTML5Backend}>
                <BurgerIngredients />
                <div hidden={false} className={styles.containerConstructor}>
                  <BurgerConstructor />
                </div>
              </DndProvider>
        }
      </main>
      {
        screenWidth < 500 &&
        <Footer btnDescription='Смотреть заказ' />
      }
    </>
  )
}

export default MainPage;