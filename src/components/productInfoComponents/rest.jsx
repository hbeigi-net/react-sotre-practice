
import React from 'react'
import {createGlobalStyle} from "styled-components"
import Grid from '@mui/material/Grid'


const RestStyles = createGlobalStyle`
    .restCotainer
    {
        width : 95vw; 
        max-width : 1250px ; 
        margin : 0 auto ; 
        font-size : 13px ; 
    }
    .bgDark{
        background-color :#111;
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
    .restFlexAround
    {
        display : flex ; 
        align-items : center ;
        justify-content : space-around
    }
    .restSection
    {
        margin : 30px auto ; 
        margin-top : 0 ; 
        padding : 50px ; 

    }
    .restImgFluid
    {
        max-width : 100% ; 
        height : 100% ; 
    }
    .restSupportActions ul li
    {
        border-radius : 2px ; 
        box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;       
         padding : 3px 100px 3px 10px ;
        margin : 15px ; 
        font-size : 13px ; 
        font-weight : 400 ; 
        cursor: pointer; 
           }

    .restSupportImage
    {
        margin : 0 ; 
        padding : 0 ; 
        height : 400px ; 
        position : relative ; 
        overflow : hidden ; 
  
    }
    .restPad-1
    {
        padding : 2rem 1rem ; 
    }
    .restTextContent h2{
        margin-bottom : 10px ; 
    }
    .restTextContent
    {
        max-width : 500px ; 
        margin : 0 auto ; 
        text-align : center ; 
    }
    .restCenter
    {
        margin : 0 auto ; 
        text-align : center ; 
    }
    .restOutStand
    {
        font-weight :600 ;
        letter-spacing : 1px ; 
        font-size : 15px ;  
        margin : 0 5px ; 
    }
`
export default function Rest() {
  return (

        <>
            <RestStyles/>

            <div className="restContainerFluid bgDark">
                <div className="restCotainer restSection ">
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

            <div className="restCotainer">
                <div className="restFlexAround">
                    <div className="restSupportActions">
                            <ul>
                                <li>
                                    Product Support 
                                </li>
                                <li>
                                    FAQ
                                </li>
                                <li>
                                    Our Buyer Guide  
                                </li>
                            </ul>
                    </div>
                    <div className="restSupportImage">
                        <img src="./img/rest/restSupport.png"  alt="support information" className='restImgFluid' />
                    </div>
                </div>
            </div>
            <div className="restContainerFluid bgDark">
                <div className="restCotainer">
                    <div className="restFlexColumn restSection restTextContent ">
                        <h2>
                            Features
                        </h2>
                        <p>
                        The MPG series brings out the best in gamers by allowing full expression in color with advanced RGB lighting control and synchronization.
                        </p>
                    </div>
                    <div className="restInfoArea restPad-1">
                            <Grid container spacing={2}>


                              <Grid item xs = {6}  sm ={3}>
                                  <div className="restFlexColumn restCenter">
                                      <img src="./img/rest/Group 14.png" alt="asset" className="restImgFluid" />
                                      <div className="">
                                          <span className="restOutStand">
                                              Intel core i7 
                                          </span>
                                     processor with the upmost computing power to bring you an unparalleled gaming experience.
                                      </div>
                                  </div>
                              </Grid>


                              <Grid item xs = {6}  sm ={3}>
                                  <div className="restFlexColumn restCenter">
                                      <img src="./img/rest/Group 17.png" alt="asset" className="restImgFluid" />
                                      <div className="">
                                          <span className="restOutStand">
                                              Intel core i7 
                                          </span>
                                     processor with the upmost computing power to bring you an unparalleled gaming experience.
                                      </div>
                                  </div>
                              </Grid>


                              <Grid item xs = {6}  sm ={3}>
                                  <div className="restFlexColumn restCenter">
                                      <img src="./img/rest/Group 16.png" alt="asset" className="restImgFluid" />
                                      <div className="">
                                          <span className="restOutStand">
                                              Intel core i7 
                                          </span>
                                     processor with the upmost computing power to bring you an unparalleled gaming experience.
                                      </div>
                                  </div>
                              </Grid>


                              <Grid item xs = {6}  sm ={3}>
                                  <div className="restFlexColumn restCenter">
                                      <img src="./img/rest/Group 15.png" alt="asset" className="restImgFluid" />
                                      <div className="">
                                          <span className="restOutStand">
                                              Intel core i7 
                                          </span>
                                     processor with the upmost computing power to bring you an unparalleled gaming experience.
                                      </div>
                                  </div>
                              </Grid>


                            </Grid>

                    </div>
                </div>
            </div>

        </>
  )
}
