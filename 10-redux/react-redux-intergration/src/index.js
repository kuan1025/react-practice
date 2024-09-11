// import React lib
import React from 'react'
// import reactDom
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store.js';
import App from './App.js'
import { createRoot } from 'react-dom/client';


// Render App to page
const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
      <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
