import { useEffect, useState } from 'react';
import AppHeader from '../app-header/App-header'
import BurgerIngredients from '../burger-ingredients/Burger-ingredients'
import BurgerConstructor from '../burger-constructor/Burger-constructor'
import BurgerConstructorContext from '../../contexts/burgerConstructorContext'
import BurgerIngredientsContext from '../../contexts/burgerIngredientsContext'
import SumOrderContext from '../../contexts/sumOrderContext'
import OrderDataContext from '../../contexts/orderDataContext'
import api from '../../utils/api'

import styles from './App.module.css'

function App() {

  const [dataIngredients, setDataIngredients] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [choiceBun, setChoiceBun] = useState({})
  const [choiceIngredients, setChoiceIngredients] = useState([])
  const [orderData, setOrderData] = useState(0)

  const [sumOrder, setSumOrder] = useState(0)

  useEffect(() => {
    api.getIngredients()
      .then(result => setDataIngredients(result.data))
      .catch(err => alert(`Ошибка при загрузке данных: ${err.message}. Перезагрузите страницу`))
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <div className={styles.app}>
      <BurgerIngredientsContext.Provider value={{ dataIngredients }}>
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
      </BurgerIngredientsContext.Provider>
    </div>
  );
}

export default App;
