import React from 'react'
import { createGlobalStyle } from 'styled-components'
import ShoppingCartItem from '../components/shoppingCartItem'
const ShoppingCartPageStyles = createGlobalStyle`
    
    #ShoppingCartMain
    {
        margin : 200px 0 ; 
    }
    .shoppingCartMainContainer
    {
        width : 95vw ; 
        max-width : 1250px ; 
        margin : 0 auto ; 
    }
`
export default function ShoppintCart() {
  return (
    <>
        <ShoppingCartPageStyles />
        <div id="ShoppingCartMain">
                <div className="shoppingCartMainContainer">
                    <h2>
                        Shopping Cart 
                    </h2>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>item</th>
                                <th>Price</th>
                                <th>Qty</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                [1,2,3,4].map(item=>
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
