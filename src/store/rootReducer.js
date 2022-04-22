import {combineReducers} from "redux"
import cartReducer from "./slices/cartSlice"


const rootReducer = combineReducers(
    {
        cartReducer
    }
)


export default rootReducer ; 