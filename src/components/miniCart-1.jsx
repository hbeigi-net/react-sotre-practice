import React from 'react'
import {createGlobalStyle} from "styled-components"
import Button from '@mui/material/Button'
import MCPI from "./miniCartProductItem"
import {useNavigate} from 'react-router-dom'
const MiniCartStyles = createGlobalStyle`
    #MiniCart
    {
        /* margin : 50px ;  */
        padding : 10px 0px  ; 
        position: absolute;
        z-index : 100 ; 
        top : 100% ; 
        right : -30px ; 
        width: 310px;
        height: 530px;
        background: #FFFFFF;
        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.14);
        /* transition : all 300ms ease ;  */
        /* opacity : ${props=> props.isOpen ? "1" : "0"} ;  */
        /* visibility : ${props=> props.isOpen? "visible" : "hidden"} */
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
        height : 300px; 
        overflow-y : auto ;
        scrollbar-width :  thin; 
        scroll-snap-type :proximity;
    }
    #mcPcList
    {
        list-style : none ; 
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
export default function MiniCart({isOpen}) {
    const navigate = useNavigate(); 
  return (
    <>
    <MiniCartStyles isOpen={isOpen}/>
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
                <Button variant="contained" onClick={(e)=>{navigate("shopping-cart")}} color="primary"  sx={{fontSize : "12px" , padding:"2px 30px" , margin : "3px"}}>
                View or Edit Your Cart
                </Button>
         
            </div>
            <div id="mcProductList">
                <ul id="mcPcList">
                 <MCPI/>
                 <MCPI/>
                 <MCPI/>
                 <MCPI/>
                 <MCPI/>
                 <MCPI/>
                 <MCPI/>
                 <MCPI/>
                 <MCPI/>
                 <MCPI/>
                 <MCPI/>
                 <MCPI/>
                 <MCPI/>
                 <MCPI/>
                 <MCPI/>
                 <MCPI/>
                 <MCPI/>
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
