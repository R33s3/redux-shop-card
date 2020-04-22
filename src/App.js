import React from 'react';
// components
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
// items
import cartItems from './cart-items';
// redux stuff
// reducer - função usada para atualizar o armazenamento
// dois argumentos - state, action
// state - antigo state / state antes da atualização
// action - o que aconteceu / qual atualização
// return state atualizado ou antigo

import { createStore } from 'redux';
import reducer from './reducer';
// react-redux - Provider - envolver aplicativo, conexão (connect function) - usado em componentes;
import { Provider } from 'react-redux';

// método dispatch - envia ações para a loja
// actions (objetos) - DEVE TER TIPO DE PROPRIEDADE - que tipo de action
// NÃO MUDA O STATE - Redux construído sobre imutabilidade (cópia)

// initial store
const initialStore = {
  cart: cartItems,
  total: 105,
  amount: 5,
};

// store
const store = createStore(reducer, initialStore);

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
