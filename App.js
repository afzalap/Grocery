import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import App2 from './src/App2';

const App = () => {
  return (
    <Provider store={store}>
      <App2/>
    </Provider>
  )
}

export default App;