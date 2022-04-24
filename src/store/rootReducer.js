import {combineReducers} from "redux"
import cartReducer from "./slices/cartSlice"
import productReducer from "./slices/productSlice"

const rootReducer = combineReducers(
    {
        cartReducer,
        productReducer
    }
)


export default rootReducer ; 