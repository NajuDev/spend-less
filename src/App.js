import React from 'react';
import './App.css';

import { Provider } from 'react-redux';

import { Store } from './store/index';

import IncomeAndSpend from './components/incomeAndSpend/incomeAndSpend.container';
import SpendLess from './components/spendLess/spendLess.container';

function App() {
  return (
    <div>
      <Provider
        store={ Store }
      >
        <IncomeAndSpend />
        <SpendLess />
      </Provider>
    </div>
  );
}

export default App;
