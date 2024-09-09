// import React lib
import React from 'react'
// import reactDom
import { BrowserRouter } from "react-router-dom";
import App from './App.js'
import { createRoot } from 'react-dom/client';


// Render App to page
const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);