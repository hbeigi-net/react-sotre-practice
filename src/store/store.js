import {configureStore , applyMiddleware } from "@reduxjs/toolkit"
import {createStore} from "redux"
import rootReducer from "./rootReducer"
import ThunkMiddleware from 'redux-thunk'
import {myThunk} from "./middleware/customThunk"
const store = configureStore({reducer : rootReducer,
    middleware: [ThunkMiddleware]
}); 

const newStore = createStore(rootReducer ,applyMiddleware(ThunkMiddleware))

export default newStore ; 