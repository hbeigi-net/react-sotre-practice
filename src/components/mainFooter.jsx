import React from 'react'
import {createGlobalStyle} from "styled-components"
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import Info from  "./supportInfo"
const MainFooterStyles = createGlobalStyle`
    .footerContainer{
        width : 100% ; 
        background-color : black ; 
        padding-top : 20px ; 

    }
    .footerContent{
        max-width : 1250px ; 
        width : 95vw ; 
        margin : 0 auto ; 
        color : white ; 
        font-size :13px ; 
        font-weight : 400 !important; 
    }
    .newsletterArea
    {
        display : flex ; 
        align-items : flex-start ; 
        justify-content : space-between ; 
    }
    .newsletterForm form {
        display : flex ; 
        align-items : center ; 
        justify-content : center ; 
        

    }
    @media (max-width : 760px) {
        .newsletterForm form
        {
            flex-direction : column ; 
        }
    }   
    .newsletterForm form input {
        margin : 0 20px ; 
        width : 200px ; 
        height : 40px ; 
        color : white ; 
        background-color : transparent ; 
        border-radius : 5px ; 
        padding : 5px 10px ; 
    }
    .newsletterForm form input:focus
    {
        outline : none ; 
    }
    .footerLinks
    {
        margin : 20px 0; 
        padding-bottom :10px ;
        border-bottom : 1px solid grey ; 
        color : white ; 
        font-size : 13px ; 
    }
    .footerLinks h3{
        color : gray ;
    }
    .footerSocialLinks
    {
        display : flex ; 
        justify-content : space-between ; 
        align-items : center ;
        color : grey ; 
    }
`
export default function Footer() {
  return (
      <>
        <MainFooterStyles />

        <Info/>
        <div className="footerContainer">

                <div className="footerContent">
                        <div className="newsletterArea">
                            <div className="newsletterHeadings">
                                <h2>
                                    Sign Up To Our Newsletter.
                                </h2>
                                <small>
                                    Be the first to hear about the latest offers.
                                </small>
                            </div>
                            <div className="newsletterForm">
                                <form >
                                    <input type="email" name="user_email_newletter" id="newletterEmail" placeholder='Your Email' />

                                    <Button variant="contained" sx={{borderRadius : "50px"}}>
                                        Subscribe
                                    </Button>
                                </form>
                            </div>
                        </div>

                        <div className="footerLinks">
                            <Grid container  justifyContent="space-between" alignItems="flex-start" >


                                <Grid item xs ={6} sm ={4} md={3} lg={2}>
                                    <h3>
                                        Information
                                    </h3>
                                    <ul>
                                        <li>
                                            About Us
                                        </li>
                                        <li>
                                        Privacy Policy
                                        </li>

                                        <li>
                                        Privacy Policy
                                        </li>
                                        <li>
                                        Privacy Policy
                                        </li>
                                        <li>
                                        Privacy Policy
                                        </li>
                                        <li>
                                        Privacy Policy
                                        </li>
                                        <li>
                                        Privacy Policy
                                        </li>
                                        <li>
                                        Orders and Returns                       
                                    </li>
                                    </ul>
                                </Grid>
                                
                                <Grid item xs ={6} sm ={4} md={3} lg={2}>
                                    <h3>
                                        Information
                                    </h3>
                                    <ul>
                                        <li>
                                            About Us
                                        </li>
                                        <li>
                                        Privacy Policy
                                        </li>

                                        <li>
                                        Privacy Policy
                                        </li>
                                        <li>
                                        Privacy Policy
                                        </li>
                                        <li>
                                        Privacy Policy
                                        </li>
                                        <li>
                                        Privacy Policy
                                        </li>
                                        <li>
                                        Privacy Policy
                                        </li>
                                        <li>
                                        Orders and Returns                       
                                    </li>
                                    </ul>
                                </Grid>
                                
                                <Grid item xs ={6} sm ={4} md={3} lg={2}>
                                    <h3>
                                        Information
                                    </h3>
                                    <ul>
                                        <li>
                                            About Us
                                        </li>
                                        <li>
                                        Privacy Policy
                                        </li>

                                        <li>
                                        Privacy Policy
                                        </li>
                                        <li>
                                        Privacy Policy
                                        </li>
                                        <li>
                                        Privacy Policy
                                        </li>
                                        <li>
                                        Privacy Policy
                                        </li>
                                        <li>
                                        Privacy Policy
                                        </li>
                                        <li>
                                        Orders and Returns                       
                                    </li>
                                    </ul>
                                </Grid>
                                
                                <Grid item xs ={6} sm ={4} md={3} lg={2}>
                                    <h3>
                                        Information
                                    </h3>
                                    <ul>
                                        <li>
                                            About Us
                                        </li>
                                        <li>
                                        Privacy Policy
                                        </li>

                                        <li>
                                        Privacy Policy
                                        </li>
                                        <li>
                                        Privacy Policy
                                        </li>
                                        <li>
                                        Privacy Policy
                                        </li>
                                        <li>
                                        Privacy Policy
                                        </li>
                                        <li>
                                        Privacy Policy
                                        </li>
                                        <li>
                                        Orders and Returns                       
                                    </li>
                                    </ul>
                                </Grid>
                                
                                <Grid item xs ={6} sm ={4} md={3} lg={2}>
                                    <h3>
                                        Information
                                    </h3>
                                    <ul>
                                        <li>
                                            About Us
                                        </li>
                                        <li>
                                        Privacy Policy
                                        </li>

                                        <li>
                                        Privacy Policy
                                        </li>
                                        <li>
                                        Privacy Policy
                                        </li>
                                        <li>
                                        Privacy Policy
                                        </li>
                                        <li>
                                        Privacy Policy
                                        </li>
                                        <li>
                                        Privacy Policy
                                        </li>
                                        <li>
                                        Orders and Returns                       
                                    </li>
                                    </ul>
                                </Grid>
                                
                                <Grid item xs ={6} sm ={4} md={3} lg={2}>
                                    <h3>
                                        Information
                                    </h3>
                                    <ul>
                                        <li>
                                            About Us
                                        </li>
                                        <li>
                                        Privacy Policy
                                        </li>

                                        <li>
                                        Privacy Policy
                                        </li>
                                        <li>
                                        Privacy Policy
                                        </li>
                                        <li>
                                        Privacy Policy
                                        </li>
                                        <li>
                                        Privacy Policy
                                        </li>
                                        <li>
                                        Privacy Policy
                                        </li>
                                        <li>
                                        Orders and Returns                       
                                    </li>
                                    </ul>
                                </Grid>
                            </Grid>
                        </div>

                        <div className="footerSocialLinks">
                            <div className="footerSocialMedias">
                                    <InstagramIcon sx={{fontSize : "16px" , margin : "0 5px"}}/>
                                    <FacebookIcon sx={{fontSize : "16px" , margin : "0 5px"}}/>
                            </div>
                            <div className="footerPayMethods">
                                <img src="./img/pay/american-express.png" alt="" />
                                <img src="./img/pay/discover.png" alt="" />
                                <img src="./img/pay/maestro.png" alt="" />
                                <img src="./img/pay/paypal.png" alt="" />
                                <img src="./img/pay/visa.png" alt="" />
                            </div>
                            <div className="footerCopyRight">
                                Copyright © 2020 Shop Pty.Ltd 
                            </div>
                        </div>
                </div>
           
            

        </div>
      </>
  )
}
