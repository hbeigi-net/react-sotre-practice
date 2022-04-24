import {configureStore} from "@reduxjs/toolkit"
import rootReducer from "./rootReducer"
import {myThunk} from "./middleware/customThunk"
const store = configureStore({reducer : rootReducer,
middleware:[myThunk]}); 

export default store ; 