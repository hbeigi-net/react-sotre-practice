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
        load_producs : async (state , action)=>
        {
            try
            {
                fetch(process.env.base_url)
                .then( (res)=>
                {
                    console.log(res); 
                    if(res.status!==200)throw new Error(`${res.message}`)
                    const data =  res.json()
             
                     return data ; 
                })
                .then(data=>
                    {
                        console.log(data); 
                        state.productList = data ; 
                    }).catch(err=>
                        {
                            throw err ; 
                        })
            }catch(err)
            {
                console.log(`an error occured in fetching products ${err.message}`); 
            }
        }
    }
})
export const {load_producs} = productSlice.actions
export default productSlice.reducer ; 