import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom"
import ThemeProvider from "./contexts/themeContext"
import AuthProvider from "./contexts/authContext"
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    
      <AuthProvider>

          <ThemeProvider>
              <App />
          </ThemeProvider>

      </AuthProvider>

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

