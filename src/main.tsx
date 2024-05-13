import * as React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx'; // Se debe importar como App en lugar de * as App
import { store } from './store.ts';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render( // Cambiado aquí
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);