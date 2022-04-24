import {set_products} from "./slices/productSlice"

const getProducts = async (state)=>
{
    try
    {
        fetch(process.env.base_url).then(res=>res.json())
        .then( (res)=>
        {
            console.log(res); 
            if(res.status!=200)throw new Error(`${res.message}`)
             return res ; 
        })
        .then(data=>
            {
                state.dispatch(set_products(data))
            })
        .catch(err=>
                {
                    throw err ; 
                })
    }catch(err)
    {
        console.log(`an error occured in fetching products ${err.message}`); 
    }
}
 