import React from 'react'
import {createGlobalStyle} from "styled-components"

const BrandsLogoBarStyles = createGlobalStyle`
    .hmbrandsArea
    {
        width : 100% ; 
        display : flex ; 
        align-items : center ; 
        justify-content : space-between ; 
    }
    .brandsLogoIMG{
        max-width : 150px ; 
        width : 100% ; 
    }
`

export default function BrandsLogoBar() {
  return (
    <>
                <BrandsLogoBarStyles/>
                <div className="hmbrandsArea">
                    <img src="./img/brandsLogo/adata.png" alt="" className='brandsLogoIMG' />
                    <img src="./img/brandsLogo/gigabyte.png" alt="" className='brandsLogoIMG' />
                    <img src="./img/brandsLogo/hewlett.png" alt="" className='brandsLogoIMG' />
                    <img src="./img/brandsLogo/raz-r.png" alt="" className='brandsLogoIMG' />
                    <img src="./img/brandsLogo/roccat.png" alt="" className='brandsLogoIMG' />
                    <img src="./img/brandsLogo/thermaltake.png" alt="" className='brandsLogoIMG' />
                </div>
    </>
  )
}
