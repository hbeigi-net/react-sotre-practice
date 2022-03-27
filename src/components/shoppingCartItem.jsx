import React from 'react'
import { createGlobalStyle } from 'styled-components'

const ShoppingCartItemStyles = createGlobalStyle`
    
`
export default function ShoppingCartItem() {
  return (
      <>
        <ShoppingCartItemStyles />
        <tr>
            <td>img</td>
            <td>10000</td>
            <td>5</td>
            <td>&times; &times; </td>
        </tr>
      </>
  )
}
