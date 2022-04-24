import {configureStore  } from "@reduxjs/toolkit"
import rootReducer from "./rootReducer"
import ThunkMiddleware from 'redux-thunk'
const store = configureStore({reducer : rootReducer,
    middleware: [ThunkMiddleware]
}); 
export default store ; 