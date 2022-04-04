import React, {useState} from 'react'
import { createGlobalStyle } from 'styled-components'
import ShoppingCartItem from '../components/shoppingCartItem'
const ShoppingCartPageStyles = createGlobalStyle`
    
    #ShoppingCartMain
    {
        margin : 200px 0 ; 
        font-size : 13px ; 
    }
    .shoppingCartMainContainer  h2{
        margin-bottom : 30px ; 
    }
    .shoppingCartMainContainer
    {
        width : 95vw ; 
        max-width : 1250px ; 
        margin : 0 auto ; 
    }
    .shopingCart-mainTable th
    {
        padding-left : 10px ; 
    }
    .shopingCart-mainTable
    {
        text-align : left ; 
        
    }
`
export default function ShoppintCart() {
    const [total, setTotal] = useState(5462)
  return (
    <>
        <ShoppingCartPageStyles />
        <div id="ShoppingCartMain">
                <div className="shoppingCartMainContainer">
                    <h2>
                        Shopping Cart 
                    </h2>
                    <h2>
                        Total : {total}$
                    </h2>
                    <table className="shopingCart-mainTable">
                        <thead>
                            
                                <tr>
                                    <th>item</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                    <th>Count</th>
                                </tr>
                        </thead>
                            <tbody>

                            {
                                [1,2,3,4,5,6,7,8,9,10,11].map(item=>
                                    {
                                        return <ShoppingCartItem key ={item}/>
                                    })
                            }
                            </tbody>

                        
                    </table>
                    
                </div>
        </div>
    </>  )
}
