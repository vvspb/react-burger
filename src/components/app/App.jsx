import { useState } from 'react';
import AppHeader from '../app-header/App-header'
import BurgerIngredients from '../burger-ingredients/Burger-ingredients'
import BurgerConstructor from '../burger-constructor/Burger-constructor'
import BurgerConstructorContext from '../../contexts/burgerConstructorContext'
import SumOrderContext from '../../contexts/sumOrderContext'
import OrderDataContext from '../../contexts/orderDataContext'

import {useSelector} from 'react-redux';

import styles from './App.module.css'



function App() {


  const [choiceBun, setChoiceBun] = useState({})
  const [choiceIngredients, setChoiceIngredients] = useState([])
  const [orderData, setOrderData] = useState(0)
  const [sumOrder, setSumOrder] = useState(0)

  const { isLoading } = useSelector((state) => state)


  return (
    <div className={styles.app}>
          <BurgerConstructorContext.Provider value={{ choiceBun, choiceIngredients, setChoiceIngredients, setChoiceBun }}>
            <SumOrderContext.Provider value={{ sumOrder, setSumOrder }}>
              <OrderDataContext.Provider value={{ orderData, setOrderData }}>
                <AppHeader />
                <main className={styles.main}>
                  {
                    isLoading ?
                      <p className={styles.load}><span className='text text_type_main-medium'>идет загрузка...</span></p>
                      :
                      <>
                        <BurgerIngredients />
                        <BurgerConstructor />
                      </>
                  }
                </main>
              </OrderDataContext.Provider>
            </SumOrderContext.Provider>
          </BurgerConstructorContext.Provider>
    </div>
  );
}

export default App;
