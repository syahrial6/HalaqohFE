import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import "../src/style/style.css"
import "../src/style/style2.css"
import "../src/style/sidebar.css"
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

axios.defaults.withCredentials = true

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

