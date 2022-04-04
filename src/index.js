import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom"
import ThemeProvider from "./contexts/themeContext"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <ThemeProvider>
             <App />
        </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

