import React from 'react';
import store from './store'
import {Provider} from 'react-redux'
import Navx from './navigation'

export default function App() {
  return (
    <Provider store={store}>
        <Navx></Navx>
    </Provider>
  );
}

