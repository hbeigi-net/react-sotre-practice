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
        set_products :  (state , action)=>
        {
           state.productList = action.payload ; 
        },
 
    like_product : (state , action)=>
    {
    //     console.log(state , 'state');
    //    const liked =  state.productList.find(item => item.id==action.payload.id);
    //    console.log(liked)
       state.likedProducts.push(action.payload.product);
    },
    unlike_product : (state , action)=>
    {
        const index = state.likedProducts.findIndex(item=> item.id == action.payload.id); 
        state.likedProducts.splice(index , 1); 
    }
}
})
export const {set_products , like_product , unlike_product} = productSlice.actions
export default productSlice.reducer ; 