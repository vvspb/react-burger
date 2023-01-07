import React from 'react';
import AppHeader from './components/app-header/App-header'
import BurgerIngredients from './components/burger-ingredients/Burger-ingredients'
import BurgerConstructor from './components/burger-constructor/Burger-constructor'

import './App.css';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <main className="Main">
        <BurgerIngredients />
        <BurgerConstructor/>
      </main>
    </div>
  );
}

export default App;
