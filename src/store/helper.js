import {set_products} from "./slices/productSlice"

export const getProducts = async (dispatch )=>
{
    try
    {
        const res = await fetch(`https://fakestoreapi.com/products`)
        const data = await res.json(); 
        console.log(data)
        dispatch(set_products(data)); 
    }catch(err)
    {
        console.log(`an error occured in fetching products ${err.message}`); 
    }
}
 