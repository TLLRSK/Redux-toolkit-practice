import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js'; // Se debe importar como App en lugar de * as App
import { store } from './store.js';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(// Cambiado aquí
_jsx(React.StrictMode, { children: _jsx(Provider, { store: store, children: _jsx(BrowserRouter, { children: _jsx(App, {}) }) }) }));
