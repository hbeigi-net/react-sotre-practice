import React from 'react'
import {createGlobalStyle}from "styled-components"
import {Link} from "react-router-dom"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
const TopBarStyles = createGlobalStyle`
    #topBarContainer{
        width: 100vw ; 
        position : fixed ; 
        top : 0 ; 
        z-index : 1000 ; 
        display : flex ; 
        justify-content : center ; 
        align-items : center ; 
        background-color : #201e1e ; 
        font-size : 12px ;
        height : 25px ;  
        color : white ; 
    }

    .text-grey 
    {
        color : #ffffff67 ; 
    }
    #topBarContent
    {
        display : flex ; 
        width : 100% ; 
        max-width : 1250px ; 
        padding : 5px 20px ; 
        align-items : center ; 
        justify-content : space-between ; 
    }
    .topSocial
    {
        display : flex ; 
        align-items : center ; 
        justify-content : space-between; 
    }
`
export default function TopBar() {
  return (
    <>
        <TopBarStyles/>
        <div id="topBarContainer">
                <div id="topBarContent">
                    <div className='topTimeArea'>
                     <span className='text-grey'>   Mon-Thu : </span> 9:00 AM - 5:30 PM 
                    </div>
                    <div className="topAddressBar">
                        <span className="text-grey"> Visit our showroom in 1234 Street Adress , 1234 </span> <Link to ="/contactus">
                            <a  style={{color : "white" , margin : "0 5px" , textDecoration : "underLine"}}> 
                                Contact Us
                            </a>
                        </Link>
                    </div>
                    <div className="topSocial">
                            <p>
                                call Us : (00)12345678
                            </p>
                            <a  href='#' style={{color : "white" , margin : "0 5px" , textDecoration : "none" ,lineHeight : "12px" }}> 
                                <FacebookIcon  sx={{fontSize : "16px"}}/>
                            </a>
                            <a href='#'   style={{color : "white" , margin : "0 5px" , textDecoration : "none" ,lineHeight : "12px" }}> 
                                <InstagramIcon sx={{fontSize : "16px"}}/>
                            </a>
                  
                    </div>
                </div>
        </div>
    </>
  )
}
