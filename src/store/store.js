import {configureStore } from "@reduxjs/toolkit"
import rootReducer from "./rootReducer"
import {myThunk} from "./middleware/customThunk"
const store = configureStore({reducer : rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk:{extraArgument :myThunk},
      serializableCheck: false,
    }),
}); 

export default store ; 