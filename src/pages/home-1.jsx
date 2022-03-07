import React from 'react'
import {createGlobalStyle} from "styled-components"
import Slider from "../components/sliderOne"
import Nav from "../components/nav"
import TopBar from "../components/topBar"
import ProductCart from "../components/productCard-1"
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Grid from '@mui/material/Grid';



const HomeOneStyles = createGlobalStyle`
    /* hp stands for home page  */
    .container1250
    {
        max-width : 1250px ; 
        width : 95vw ; 
        margin : 0 auto ;
    }
    .flex-between
    {
        display : flex ; 
        align-items : center ; 
        justify-content : space-between
    }
    .colFlexCenter
    {
        display : flex ; 
        align-items : center ; 
        justify-content : center ; 
        flex-direction : column ; 
    }

`
export default function HomeOne() {
  return (
      <>
    <HomeOneStyles/>
    <TopBar/>
    <Nav/> 
    <Slider style={{marginTop:"100px"}}>
        <div>
            <img src='./img/homeOneTopSlider/image 26.png' width="100%"/>
        </div>
 
        <div>
            <img src='./img/homeOneTopSlider/image 26.png' width="100%"/>
        </div>
 
        <div>
            <img src='./img/homeOneTopSlider/image 26.png' width="100%" />
        </div>
 
        <div>
            <img src='./img/homeOneTopSlider/image 26.png' width="100%" />
        </div>
    </Slider>

    <section id='HomePageNewProducts'>
        <div className="container1250 flex-between">

        <h2 className="hpNewProductHeading">
            New Products
        </h2>

        <a href="#">
            See All New Products
        </a>


        </div>

        <div className="container1250">
            <Slider set={{slidesToShow : 5 , slidesToScroll :3}}>
             <div>
                 <ProductCart activeActions ={false} noShadow ={true}/>
             </div>
             <div>
                 <ProductCart activeActions ={false} noShadow ={true}/>
             </div>
             <div>
                 <ProductCart activeActions ={false} noShadow ={true}/>
             </div>
             <div>
                 <ProductCart activeActions ={false} noShadow ={true}/>
             </div>
             <div>
                 <ProductCart activeActions ={false} noShadow ={true}/>
             </div>
             <div>
                 <ProductCart activeActions ={false} noShadow ={true}/>
             </div>
             <div>
                 <ProductCart activeActions ={false} noShadow ={true}/>
             </div>
             <div>
                 <ProductCart activeActions ={false} noShadow ={true}/>
             </div>
            </Slider>
        </div>
    </section>



    <section id="customBuilds">
            <div className="container1250 ">
                    <Grid container spacing={2} justifyContent ="center">
                        <Grid item xs={12} lg={3}>
                            <div className="colFlexCenter" style={{background :"url('./img/image 30.png')" , width : "100%" ,backgroundRepeat : "no-repeat" ,backgroundPosition : "center",backgroundSize : "cover", padding : "30px 0" , height : "100%"}}>
                                <h3>
                                    Custom Builds
                                </h3>
                                <a href="#">
                                    See All Products
                                </a>
                            </div>
                        </Grid>

                        <Grid item container xs={12} lg={9} spacing={2} justifyContent ="space-between" alignItems={"center"} >
                            <Grid item lg={3} xs={6} sm={4} md={3}>
                                <ProductCart activeActions = {false} noShadow={true} />
                            </Grid>
                            <Grid item lg={3} xs={6} sm={4} md={3}>
                                <ProductCart activeActions = {false} noShadow={true} />
                            </Grid>
                            <Grid item lg={3} xs={6} sm={4} md={3}>
                                 <ProductCart activeActions = {false} noShadow={true} />
                            </Grid>
                            <Grid item lg={3} xs={6} sm={4} md={3}>
                                 <ProductCart activeActions = {false} noShadow={true} />
                            </Grid>
                        </Grid>

                   </Grid>
            </div>
    </section>




    <section id="customBuilds">
            <div className="container1250 ">
                    <Grid container spacing={2} justifyContent ="center">
                        <Grid item xs={12} lg={3}>
                            <div className="colFlexCenter" style={{background :"url('./img/image 30.png')" , width : "100%" ,backgroundRepeat : "no-repeat" ,backgroundPosition : "center",backgroundSize : "cover", padding : "30px 0" , height : "100%"}}>
                                <h3>
                                    Custom Builds
                                </h3>
                                <a href="#">
                                    See All Products
                                </a>
                            </div>
                        </Grid>

                        <Grid item container xs={12} lg={9} spacing={2} justifyContent ="space-between" alignItems={"center"} >
                            <Grid item lg={3} xs={6} sm={4} md={3}>
                                <ProductCart activeActions = {false} noShadow={true} />
                            </Grid>
                            <Grid item lg={3} xs={6} sm={4} md={3}>
                                <ProductCart activeActions = {false} noShadow={true} />
                            </Grid>
                            <Grid item lg={3} xs={6} sm={4} md={3}>
                                 <ProductCart activeActions = {false} noShadow={true} />
                            </Grid>
                            <Grid item lg={3} xs={6} sm={4} md={3}>
                                 <ProductCart activeActions = {false} noShadow={true} />
                            </Grid>
                        </Grid>

                   </Grid>
            </div>
    </section>




    </>
  )
}
