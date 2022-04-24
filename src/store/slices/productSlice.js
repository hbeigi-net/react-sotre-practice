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
        set_products : async (state , action)=>
        {
           state.productList = action.payload ; 
        }
    }
})
export const {set_products} = productSlice.actions
export default productSlice.reducer ; 