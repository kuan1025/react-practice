// import React lib
import React from 'react'
// import reactDom
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom";
import App from './App.js'


// Render App to page
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);