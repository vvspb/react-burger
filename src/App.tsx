import React from 'react';
import AppHeader from './components/app-header/App-header'
import BurgerIngredients from './components/burger-ingredients/Burger-ingredients'
import BurgerConstructor from './components/burger-constructor/Burger-constructor'

import mockData from './utils/data.json'

import './App.css';

function App() {

  // моковые данные для конструктора
  const bunArr = mockData.filter(item => item.type === 'bun');
  const dataBun = bunArr[0];
  const ingredientsArr = mockData.filter(item => item.type !== 'bun');

  return (
    <div className="App">
      <AppHeader />
      <main className="main">
        <BurgerIngredients data={mockData}/>
        <BurgerConstructor choiceIngredients={ingredientsArr} choiceBun={dataBun}/>
      </main>
    </div>
  );
}

export default App;
