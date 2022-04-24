import {set_products} from "./slices/productSlice"

export const getProducts = async (dispatch , getState)=>
{
    try
    {
        const res = await fetch(`https://fakestoreapi.com/products`)
        // console.log(res); 
        const data = await res.json(); 
        console.log(data)
        dispatch(set_products(data)); 
    }catch(err)
    {
        console.log(`an error occured in fetching products ${err.message}`); 
    }
}
 