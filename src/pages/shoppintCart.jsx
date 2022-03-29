import React from 'react'
import { createGlobalStyle } from 'styled-components'
import ShoppingCartItem from '../components/shoppingCartItem'
const ShoppingCartPageStyles = createGlobalStyle`
    
    #ShoppingCartMain
    {
        margin : 200px 0 ; 
        font-size : 13px ; 
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
  return (
    <>
        <ShoppingCartPageStyles />
        <div id="ShoppingCartMain">
                <div className="shoppingCartMainContainer">
                    <h2>
                        Shopping Cart 
                    </h2>
                    <table className="shopingCart-mainTable">
                        
                            <tr>
                                <th>item</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Count</th>
                            </tr>
             
                  
                            {
                                [1,2,3,4].map(item=>
                                    {
                                        return <ShoppingCartItem key ={item}/>
                                    })
                            }
                        
                    </table>
                    
                </div>
        </div>
    </>  )
}
