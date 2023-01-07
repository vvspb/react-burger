import React from 'react';
import AppHeader from './components/app-header/App-header'
import BurgerIngredients from './components/burger-ingredients/Burger-ingredients'

import './App.css';

function App() {
  return (
    <div className="App">
     <AppHeader/>
     <BurgerIngredients/>
    </div>
  );
}

export default App;
