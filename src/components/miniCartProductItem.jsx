import React from 'react'
import {createGlobalStyle} from "styled-components"
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import IconButton from '@mui/material/IconButton'
import CreateSharpIcon from '@mui/icons-material/CreateSharp';
const MCPIStyles = createGlobalStyle`
        .mcPcItem
    {
        display : flex ; 
        align-items : center ; 
        justify-content : space-between ; 
        font-size : 11px ; 
        font-weight : 400 ; 
        line-height : 13px ; 
        padding : 3px  10px;
        border-bottom : 1px solid grey ; 
    }
    .mcPcItem span {
        font-size : 14px ; 
        text-align : center ; 
    }
    .mcPcItemTitle
    {
        max-width : 40% ; 
    }
    .mcPcItemActions
    {
        flex-shrink : 1 ; 
        display : flex ;
        flex-direction : column ; 
        align-items : center ; 
        justify-content : center ;  
    }
`
export default function MiniCartProductItem() {
  return (
    <>
         <MCPIStyles/>
        <li className="mcPcItem">
                        <span> &times; {3}</span>
                        <img src="./—Pngtree—wireless headphones blue_4347448.png" width="80px"  alt="" />
                        <div className="mcPcItemTitle">
                        EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...
                        </div>
                        <div className="mcPcItemActions">
                            <IconButton sx={{padding : "2px"}}>
                              <HighlightOffIcon sx={{fontSize : "16px" }}/>
                            </IconButton>
                            <IconButton  sx={{padding : "2px"}} >
                              <CreateSharpIcon sx={{fontSize : "16px" }}/>
                            </IconButton>
                        </div>
                    </li>
    </>
  )
}
