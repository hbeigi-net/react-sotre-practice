import React , {useState , useEffect} from 'react'
import { createGlobalStyle } from 'styled-components'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const ShoppingCartItemStyles = createGlobalStyle`
    .shop-item-main{
      max-height : 200px ; 
      position : relative ; 
      overflow : hidden ; 
    }
    .shop-item-description
    {
      max-width : 400px ; 
      padding : 10px ; 
    }
    .shop-item-priceArea
    {
      padding : 0 20px ; 
      font-size : 30px ; 
    }
    .shop-item-image
    {
      height : 200px  ; 

    }
`
export default function ShoppingCartItem({itemCounter =1}) {
  const [itemCount, setItemCount] = useState()
  useEffect(() => {
    setItemCount(itemCounter)
  
    return () => {
      
    }
  }, [])
  
  return (
      <>
        <ShoppingCartItemStyles />
        <tr className='shop-item-main'>
            <td>
              <img src="./img/gamingMonitors.png" alt="product image " className="shop-item-image" />
            </td>

            <td>
              <div className="shop-item-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa delectus sint explicabo odio quidem excepturi porro culpa nemo dolorum consequuntur eos nisi aliquam, optio repellat nesciunt eius perferendis error sunt, dolorem aperiam temporibus, quas officia.
              </div>
            </td>

            <td>
              <div className='shop-item-priceArea'>
                {399.00}$
              </div>
              </td>

              <td>
                <div className="shop-item-countArea">
                  <IconButton
                   aria-label="puls One "
                   onClick={()=> setItemCount(itemCount+1)}
                  
                   >
                    <AddIcon/>
                  </IconButton>
                  <TextField
                    id="shop-item-counter"
                    label=""
                    value={itemCount}
                    // onChange={}
                    disabled
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    sx={{width : "50px"}}
                  
                  />
                        <IconButton
                   aria-label="minus One "
                   onClick={()=> setItemCount(itemCount>0 ? itemCount-1 : 0)}
                  
                   >
                    <RemoveIcon/>
                  </IconButton>
                </div>
              </td>
          
         </tr>
      </>
  )
}
