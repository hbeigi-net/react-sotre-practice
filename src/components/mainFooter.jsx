import React from 'react'
import {createGlobalStyle} from "styled-components"
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'



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
`
export default function Footer() {
  return (
      <>
        <MainFooterStyles />
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
                                
                            </div>
                            <div className="footerPayMethods">

                            </div>
                            <div className="footerCopyRight">

                            </div>
                        </div>
                </div>
           
            

        </div>
      </>
  )
}
