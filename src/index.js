import React from 'react';
import './index.css';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import reportWebVitals from './reportWebVitals';

import App from './App';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
//const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

//reportWebVitals();
