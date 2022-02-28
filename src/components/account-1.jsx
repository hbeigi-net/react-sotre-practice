import React from 'react'
import {createGlobalStyle} from "styled-components"
import {Link} from "react-router-dom"
const AccDataDropDownStyles = createGlobalStyle`
    /* ad==> Account Data  */
    .adContainer 
    {
        width : 170px ; 
        height : 150px ; 
        position : absolute ; 
        box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
        padding : 5px ; 
        border-radius : 3px ;  
        margin : 100px ; 
        font-size : 14px ; 
    }
    .adContent{
        position : relative ; 
        padding : 10px ; 
    }
    .topTriangle
    {
        position :absolute ; 
        top : -22px  ; 
        right : 15px ; 
        border : 10px solid transparent ; 
        border-bottom-color :#fff;
        border-bottom-style : groove;  
    }
`
export default function AccountDroupDown() {
    const linkStyle ={
        color : "black"
    }
  return (
    
    <>
    <AccDataDropDownStyles/>
        <div className="adContainer">
            <div className="adContent">
                <ul className='adLinks'>
                    <li>
                        <Link to='/account' style={linkStyle} >
                            My Account
                        </Link>
                    </li>
                    <li>
                        <Link to='/account' style={linkStyle}  >
                            My Wish List (<span>3</span>)
                        </Link>
                    </li>
                    <li>
                        <Link to='/account' style={linkStyle} >
                            Compare ( <span>4</span>)
                        </Link>
                    </li>
                    <li>
                        <Link to='/account' style={linkStyle} >
                            Create an Account
                        </Link>
                    </li>
                    <li>
                        <Link to='/account' style={linkStyle} >
                            Sign In 
                        </Link>
                    </li>
                </ul>
                <div className="topTriangle">

                </div>
            </div>
        </div>
    </>
  )
}
