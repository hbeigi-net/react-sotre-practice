import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'



const AuthPageStyles = createGlobalStyle`
    #auth-page-main
    {
        margin : 200px 0 ; 
    }
    .authMainContainer
    {
        width : 95vw ; 
        max-width : 1250px ; 
        margin : 0 auto ; 
    }
    .AuthFormArea p
    {
        margin-bottom : 30px ; 
    }
    .AuthFormArea
    {
        background-color : #eee ; 
        padding : 30px 10px ; 
        display : flex ; 
        flex-direction : column ; 
        align-items : center ; 

    }
`
export default function Auth() {
  return (
  <>
        <AuthPageStyles/>
        <div id="auth-page-main">

            <div className="authMainContainer">
                    <h1>
                        Customer Login
                    </h1>

                                <div className="AuthFormArea">
                                    <h4>
                                      Registered Customers
                                    </h4>
                                    <p>
                                      If you have an account, sign in with your email address.
                                    </p>
                                    <label htmlFor="Auth-form-email"> Your email : </label><br />
                                    <TextField
                                      id="Auth-form-email"
                                    //   label="Your Name"
                                    //   value={"name"}
                                    //   onChange={}
                                      sx={{width: "350px"}}
                             
                                    />
                                    <label htmlFor="Auth-form-pass"> Your Password : </label><br />
                                    <TextField
                                      id="Auth-form-pass"
                                    //   label="Your Name"
                                    //   value={"name"}
                                    //   onChange={}
                                      sx={{width: "350px"}}
                   
                                    />
                                    <Button variant="contained" color="primary" sx={{margin : "10px 0" , maxWidth : "200px"}}> 
                                      login
                                    </Button>
                                 
                                </div>
            </div>


        </div>
  
  </>
  )
}
