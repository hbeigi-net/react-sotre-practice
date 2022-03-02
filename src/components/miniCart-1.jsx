import React from 'react'
import {createGlobalStyle} from "styled-components"
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {BtnOne} from "../components/subComponents/btns"
import IconButton from '@mui/material/IconButton'
import CreateSharpIcon from '@mui/icons-material/CreateSharp';
import Button from '@mui/material/Button'

const MiniCartStyles = createGlobalStyle`
    #MiniCart
    {
        margin : 50px ; 
        padding : 10px 0px  ; 
        
        position: relative;
        width: 310px;
        height: 511px;
        background: #FFFFFF;
        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.14);
    }
    #MiniCartContent
    {
  
    }
    #mcHeader{
        display : flex ; 
        align-items : center ; 
        justify-content : space-between ; 
        flex-direction : column ;
        padding-bottom : 10px ; 
        border-bottom : 1px solid grey ;  
    }
    #mcHeader h2{
        font-weight : 400 ; 
        margin : 0 ; 
        line-height : 25px ; 
        
    }
    #mcHeader small{
        color : #616161;
        margin-bottom : 10px ; 
    }
    #mcProductList
    {
        position : relative ; 
        overflow : hidden ; 
        max-height : 300px; 
        overflow-y : auto ;
        scrollbar-width :  thin; 
        scroll-snap-type :proximity;
    }
    #mcPcList
    {
        list-style : none ; 
    }
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
    #mcFooter
    {
        font-size : 14px ; 
        padding  : 10px ; 
        padding-bottom : 0 ; 
        border-top  : 1px solid grey ; 
        display : flex ; 
        align-items  :center ; 
        justify-content : center ; 
        flex-direction : column ; 
    }
    #mcFooter p span 
    {
        color : grey ; 
    }
    
`
export default function MiniCart() {
  return (
    <>
    <MiniCartStyles/>
    <div id="MiniCart">
        <div id="TopAnchor">
        <div style={{height : "20px",width : "100px" , overflow : "hidden" , position :"absolute" ,right : "0", top: "-20px"}} ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height : "100%" , width : "100%"}}><path d="M215.86,36.02 C217.54,34.03 215.29,37.00 218.11,34.03 L264.95,152.47 L162.25,153.45 Z" style={{stroke : "ButtonShadow", fill : "#FFFFFF"}}></path></svg></div>
        </div>
        <div id="MiniCartContent">
            <div id="mcHeader">
                <h2>
                    My Cart
                </h2>
                <small>
                    {2} item in cart 
                </small>
                <Button variant="contained" color="primary"  sx={{fontSize : "12px" , padding:"2px 30px" , margin : "3px"}}>
                View or Edit Your Cart
                </Button>
         
            </div>
            <div id="mcProductList">
                <ul id="mcPcList">
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
                </ul>
            </div>
            <div id="mcFooter">
                <p>
                    <span>
                        Subtotal : 
                    </span>
                    $ {899.01}
                </p>
                <Button variant="contained" color="primary"  sx={{fontSize : "12px", width : "80%" , padding:"2px 5px" , margin : "3px"}}>
                  Go to Checkout
                </Button>
                <Button variant="contained" color="warning" sx={{fontSize : "12px",width : "80%" , padding:"2px 5px" , margin : "3px"}}>
                  Check out with <span style={{width :"5px"}}></span> <img src="./img/Group 106.png" alt="" />
                </Button>
            </div>
        </div>
    </div>
    </>
  )
}
