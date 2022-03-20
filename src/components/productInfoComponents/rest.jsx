
import React from 'react'
import {createGlobalStyle} from "styled-components"
import Grid from '@mui/material/Grid'

const RestStyles = createGlobalStyle`
    .restCotainer
    {
        width : 95vw; 
        max-width : 1250px ; 
    }
    .bgDark{
        background-color : #000000;
        color : white ; 
    }
    .restHead
    {
        font-size : 25px ; 
        width : 200px ; 
        letter-spacing : 3px ; 
        font-weight : 600; 
    }
    .restDescription
    {
        max-width : 400px ; 
    }
    .restFlexCenter
    {
        display : flex ; 
        align-items : center ; 
        justify-content : center ; 
    }
    .restFlexColumn
    {
        display : flex ; 
        align-items : center ; 
        justify-content : center ; 
        flex-direction : column ; 
    }
    .restSection
    {
        margin : 30px 0 ; 
        padding : 50px ; 
    }
    .restImgFluid
    {
        max-width : 100% ; 
    }
`
export default function Rest() {
  return (

        <>
            <RestStyles/>

            <div className="restContainerFluid bgDark">
                <div className="restContainer restSection ">
                    <Grid container spacing={2} justifyContent ="center" alignItems={"center"}>
                        <Grid item md={5}>
                            <div className=" ">

                                <h2 className='restHead'>
                                Outplay the Competittion
                                </h2>
                                <p className='restDescription'>
                                Experience a 40% boost in computing from last generation. MSI Desktop equips the 10th Gen. Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled gaming experience.
                                *Performance compared to i7-9700. Specs varies by model.
                                </p>
                            </div>
                        </Grid>
                        <Grid item md={5}>
                            <img src="./img/rest/restCpu.png" alt="cpu" className='restImgFluid' />
                        </Grid>
                    </Grid> 
                </div>
            </div>
        </>
  )
}
