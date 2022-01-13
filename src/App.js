import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { CurrencyGrid } from './features/currencyGrid/CurrencyGrid';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import NavBar from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
        <CurrencyGrid />
    </div>
  );
}

export default App;
