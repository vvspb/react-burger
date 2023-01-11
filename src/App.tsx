import { useEffect, useState } from 'react';
import AppHeader from './components/app-header/App-header'
import BurgerIngredients from './components/burger-ingredients/Burger-ingredients'
import BurgerConstructor from './components/burger-constructor/Burger-constructor'
import mockData from './utils/data.json'
import api from './utils/api'

import './App.css';

function App() {

  const [dataIngredients, setDataIngredients] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    api.getIngredients()
      .then(result => setDataIngredients(result.data))
      .finally(()=> setIsLoading(false))
  }, [])

  // захардкоженные данные для конструктора
  const dataBun = mockData.find(item => item.type === 'bun');
  const ingredientsArr = mockData.filter(item => item.type !== 'bun');

  return (
    <div className="App">
      <AppHeader />
      <main className="main">
        {
          isLoading? 
          <p className='load'><span className='text text_type_main-medium'>идет загрузка...</span></p>
          :
          <>
            <BurgerIngredients data={dataIngredients} />
            <BurgerConstructor choiceIngredients={ingredientsArr} choiceBun={dataBun} />
          </>
        }
      </main>
    </div>
  );
}

export default App;
