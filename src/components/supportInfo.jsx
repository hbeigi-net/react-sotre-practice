
import React from 'react'
import {createGlobalStyle} from "styled-components"
import Grid from '@mui/material/Grid'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PersonIcon from '@mui/icons-material/Person';
const SupportInfoStyle= createGlobalStyle`
    .infoCardsContainer
    {
        max-width : 1250px ; 
        width : 95vw ; 
        margin : 20px auto ; 
    }
    .supinInfoCard
    {
        display : flex ; 
        max-width : 250px ; 
        margin : 0 auto  ;
        align-items : center ; 
        font-size : 13px ; 
        line-height : 20px ; 
        justify-content : center ; 
        flex-direction : column ;
        text-align : center ;  
    }

    .infoCardIconContainer
    {

        display : flex ; 
        width : 50px ; 
        height : 50px ; 
        align-items : center ; 
        justify-content : center ;
        line-height : 10px ; 
        background-color : rgb(88, 88, 247) ; 
        border-radius  : 50% ; 
        margin : 10px 0 ; 
    }
`
export default function SupportInfo() {
  return (
        <>
            <SupportInfoStyle/>
            <div className="infoCardsContainer">
                <Grid container spacing={2} alignItems ="center" justifyContent = "center">


                        <Grid item xs={12} sm ={4}  >
                            <div className='supinInfoCard'>
                                <span className='infoCardIconContainer'>
                                    <SupportAgentIcon sx={{fontSize : "30px" , color : "white"}} />
                                </span>
                                <h4>
                                Product Support
                                </h4>
                                <p>
                                Up to 3 years on-site warranty available for your peace of mind.
                                </p>
                            </div>
                        </Grid>
                    
                        <Grid item xs={12} sm ={4} >
                            <div className='supinInfoCard'>
                                <span className='infoCardIconContainer'>
                                    <LocalOfferIcon sx={{fontSize : "30px" , color : "white"}} />
                                </span>
                                <h4>
                                Amazing Savings 
                            </h4>
                                <p>
                                Up to 70% off new Products, you can be sure of the best price.                            </p>
                            </div>
                        </Grid>
                    
                        <Grid item xs={12} sm ={4} >
                            <div className='supinInfoCard'>
                                <span className='infoCardIconContainer'>
                                    <PersonIcon sx={{fontSize : "30px" , color : "white"}} />
                                </span>
                                <h4>
                                Personal Account
                            </h4>
                                <p>
                                With big discounts, free delivery and a dedicated support specialist.                           </p>
                            </div>
                        </Grid>
                </Grid>
            </div>
        </>
  )
}
