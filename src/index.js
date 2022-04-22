import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import ThemeProvider from "./contexts/themeContext"
import AuthProvider from "./contexts/authContext"
import {Provider} from "react-redux"
import store from "./store/store"
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    
      <AuthProvider>

          <Provider store={store}>

            <ThemeProvider>
                <App />
            </ThemeProvider>

          </Provider>

      </AuthProvider>

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

