import {createSlice} from "@reduxjs/toolkit"

const initialState = 
{
    currentProduct : {},
    productList : [],
    likedProducts :[],
}


export const productSlice = createSlice({
    name : "products_slice" , 
    initialState ,
    reducers : {
        set_producs : async (state , action)=>
        {
           state.productList = action.payload ; 
        }
    }
})
export const {set_producs} = productSlice.actions
export default productSlice.reducer ; 