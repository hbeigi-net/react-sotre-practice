import React from 'react'
import {createGlobalStyle} from 'styled-components'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import LocationOnIcon from '@mui/icons-material/LocationOn';


const ContactUsStyles = createGlobalStyle`
    #main-contact-us-page
    {
        margin : 200px 0; 
        font-size : 13px ; 
        font-weight : 400; 
    }
    .CuContainer{
        max-width : 1250px ; 
        width : 95vw ; 
        margin : 0 auto ; 
    }
    .CuMt
    {
        margin-top : 30px ; 
        margin-bottom : 50px ; 
    }

`
export default function CotactUs() {
  return (
      <>
      <ContactUsStyles/>
      <div id = "main-contact-us-page">
            <div className="CuContainer">
                <Grid container spacing={2}>
                   <Grid item xs={12} md={9} >
                        <h2>
                            contact Us 
                        </h2>
                        <p>
                        We love hearing from you, our Shop customers.
                        Please contact us and we will make sure to get back to you as soon as we possibly can.
                        </p>
                        <div  className='CuMt'>
                            <Grid container spacing={2} sx={{maxWidth:"800px"}} justifyContent ="space-between">

                                <Grid item xs={12} md={6} >
                                    <label htmlFor="Cu-form-name"> Your Name : </label><br />
                                    <TextField
                                      id="Cu-form-name"
                                    //   label="Your Name"
                                    //   value={"name"}
                                    //   onChange={}
                                    //   sx={{width: "350px"}}
                                    fullWidth
                                    />
                                </Grid>
                                
                                <Grid item xs={12} md={6}>
                                <label htmlFor="Cu-form-email"> Your Email : </label><br />
                                    <TextField
                                      id="Cu-form-email"
                                    //   label="Your email"
                                    //   value={"name"}
                                    //   onChange={}
                                    //   sx={{width: "350px"}}
                                    fullWidth
                                    />
                                </Grid>
                                
                                <Grid item xs={12} md={6}>
                                <label htmlFor="Cu-form-phone"> Your Phone Number : </label><br />
                                    <TextField
                                      id="Cu-form-phone"
                                    //   label="Your Phone Number"
                                    //   value={"name"}
                                    //   onChange={}
                                    //   sx={{width: "350px"}}
                                    fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                <label htmlFor="Cu-form-text"> Your message : </label><br />
                                        <TextField
                                          id="Cu-from-text"
                                        //   value={}
                                        //   onChange={}
                                        // sx={{maxWidth : "800px"}}
                                          multiline 
                                          fullWidth
                                        />
                                </Grid>
                                
                            </Grid> 
                        </div>
                   </Grid>
                   <Grid item xs={12} md={3} >
                     <Grid container spacing={2}>
                            <Grid item xs={3} md={12} sx={{display:"flex"}}>
                              <LocationOnIcon/>
                              <div> 
                                 <h3>
                                   Address : 
                              
                                 </h3>
                                 <p>
                                     this is a placeHolder for address
                                 </p>
                              </div>
                            </Grid>
                            <Grid item xs={3} md={12} sx={{display:"flex"}}>
                              <LocationOnIcon/>
                              <div> 
                                 <h3>
                                   Address : 
                              
                                 </h3>
                                 <p>
                                     this is a placeHolder for address
                                 </p>
                              </div>
                            </Grid>
                            <Grid item xs={3} md={12} sx={{display:"flex"}}>
                              <LocationOnIcon/>
                              <div> 
                                 <h3>
                                   Address : 
                              
                                 </h3>
                                 <p>
                                     this is a placeHolder for address
                                 </p>
                              </div>
                            </Grid>
                            <Grid item xs={3} md={12} sx={{display:"flex"}}>
                              <LocationOnIcon/>
                              <div> 
                                 <h3>
                                   Address : 
                              
                                 </h3>
                                 <p>
                                     this is a placeHolder for address
                                 </p>
                              </div>
                            </Grid>
                     </Grid>
                   </Grid>
                </Grid>
            </div>
      </div>
      </>
  )
}
