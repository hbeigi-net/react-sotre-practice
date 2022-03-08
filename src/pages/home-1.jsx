import React , {useState} from 'react'
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
import BrandsLogoBar from "../components/brandsLogoBar"
import BlogPostCard from "../components/blogPostCard"
import TestimonialCarouselItem from "../components/TestimonialCarouselItem"; 
import SliderTwo from "../components/sliderTwo"
const HomeOneStyles = createGlobalStyle`
    /* hp stands for home page  */
    .container1250
    {
        max-width : 1250px ; 
        width : 95vw ; 
        margin : 50px auto ;
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
    const [valueOne, setValueOne] = useState('1');
    const [valueTwo, setValueTwo] = useState('1');
    const handleChangeOne = (event, newValue) => {
        setValueOne(newValue);
      };
    const handleChangeTwo = (event, newValue) => {
        setValueTwo(newValue);
      };
        
      const boxStyle = { 

        width : "100%" ,
        backgroundRepeat : "no-repeat" ,
        backgroundPosition : "center",
        backgroundSize : "cover",
        padding : "30px 0" ,
        height : "100%" ,
        color : "white"
    }

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



        <section id="homePageMsilp">
                <div className="container1250 ">

                    <TabContext value={valueOne}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList variant= {window.innerWidth < 768 ? "fullWidth"  : "" } onChange={handleChangeOne} aria-label="lab API tabs example">
                                    <Tab label="MSI GS Series" value="1" />
                                    <Tab label="MSI GT Series" value="2" />
                                    <Tab label="MSI GL Series" value="3" />
                                    <Tab label="MSI GE Series" value="4" />
                                </TabList>
                            </Box>
                            <TabPanel value="1" sx={{padding : "15px 0"  , width : "100%"}}>   
                                <Grid container spacing={2} justifyContent ="center">
                                    <Grid item xs={12} lg={3}>
                                        <div className="colFlexCenter" style={{...boxStyle ,background :"url('./img/msilp.png')"}}>
                                            <h3>
                                                Msi laptops
                                            </h3>
                                            <a href="#" style={{color : "white"}}>
                                                See All MSI GS Series Products
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
                        </TabPanel>
                            <TabPanel value="2" sx={{padding : "15px 0"  , width : "100%"}}> 
                                <Grid container spacing={2} justifyContent ="center">
                                        <Grid item xs={12} lg={3}>
                                            <div className="colFlexCenter" style={{...boxStyle ,background :"url('./img/msilp.png')"}}>
                                                <h3>
                                                    Msi laptops
                                                </h3>
                                                <a href="#" style={{color : "white"}}>
                                                    See All MSI GT Series Products
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
                            </TabPanel>
                            <TabPanel value="3" sx={{padding : "15px 0"  , width : "100%"}}>
                                <Grid container spacing={2} justifyContent ="center">
                                        <Grid item xs={12} lg={3}>
                                            <div className="colFlexCenter" style={{...boxStyle ,background :"url('./img/msilp.png')"}}>
                                                <h3>
                                                    Msi laptops
                                                </h3>
                                                <a href="#" style={{color : "white"}}>
                                                    See All MSI GL Series Products
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
                            </TabPanel>
                            <TabPanel value="4" sx={{padding : "15px 0"  , width : "100%"}}>
                                <Grid container spacing={2} justifyContent ="center">
                                        <Grid item xs={12} lg={3}>
                                            <div className="colFlexCenter" style={{...boxStyle ,background :"url('./img/msilp.png')"}}>
                                                <h3>
                                                    Msi laptops
                                                </h3>
                                                <a href="#" style={{color : "white"}}>
                                                    See All MSI GE Series Products
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
                            </TabPanel>
                    </TabContext>
                    
                </div>
        </section>




        <section id="homePageMsiDesktops">
                <div className="container1250 ">

                    <TabContext value={valueTwo}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList variant= {window.innerWidth < 768 ? "fullWidth"  : "" } onChange={handleChangeTwo} aria-label="lab API tabs example">
                                    <Tab label="MSI Infinute Series" value="1" />
                                    <Tab label="MSI Triden" value="2" />
                                    <Tab label="MSI GL Series" value="3" />
                                    <Tab label="MSI Nightblade" value="4" />
                                </TabList>
                            </Box>
                            <TabPanel value="1" sx={{padding : "15px 0"  , width : "100%"}}>   
                                <Grid container spacing={2} justifyContent ="center">
                                    <Grid item xs={12} lg={3}>
                                        <div className="colFlexCenter" style={{...boxStyle ,background :"url('./img/msidesk.png')"}}>
                                            <h3>
                                            Desktops
                                            </h3>
                                            <a href="#" style={{color : "white"}}>
                                                See All MSI Infinute Series Products
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
                        </TabPanel>
                            <TabPanel value="2" sx={{padding : "15px 0"  , width : "100%"}}> 
                                <Grid container spacing={2} justifyContent ="center">
                                        <Grid item xs={12} lg={3}>
                                            <div className="colFlexCenter" style={{...boxStyle ,background :"url('./img/msidesk.png')"}}>
                                                <h3>
                                                Desktops
                                                </h3>
                                                <a href="#" style={{color : "white"}}>
                                                    See All MSI Triden Products
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
                            </TabPanel>
                            <TabPanel value="3" sx={{padding : "15px 0"  , width : "100%"}}>
                                <Grid container spacing={2} justifyContent ="center">
                                        <Grid item xs={12} lg={3}>
                                            <div className="colFlexCenter" style={{...boxStyle ,background :"url('./img/msidesk.png')"}}>
                                                <h3>
                                                Desktops
                                                </h3>
                                                <a href="#" style={{color : "white"}}>
                                                    See All MSI GL Series Products
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
                            </TabPanel>
                            <TabPanel value="4" sx={{padding : "15px 0"  , width : "100%"}}>
                                <Grid container spacing={2} justifyContent ="center">
                                        <Grid item xs={12} lg={3}>
                                            <div className="colFlexCenter" style={{...boxStyle ,background :"url('./img/msidesk.png')"}}>
                                                <h3>
                                                Desktops
                                                </h3>
                                                <a href="#" style={{color : "white"}}>
                                                    See All MSI Nightblade Products
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
                            </TabPanel>
                    </TabContext>
                    
                </div>
        </section>


        
        <section id="homePageGamingMonitors">
                <div className="container1250 ">
                        <Grid container spacing={2} justifyContent ="center">
                            <Grid item xs={12} lg={3}>
                                <div className="colFlexCenter" style={{background :"url('./img/gamingMonitors.png')" , width : "100%" ,backgroundRepeat : "no-repeat" ,backgroundPosition : "center",backgroundSize : "cover", padding : "30px 0" , height : "100%" , color : "white"}}>
                                    <h3>
                                        Gaming Monitors
                                    </h3>
                                    <a href="#" style={{color : "white"}}>
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

        <section id="homePageBrandsLogoBar" className="container1250">
           <BrandsLogoBar/>
        </section>
        
        <section id = "homePageBlogPostCards">
            <div className="container1250">
                    <h3 style={{margin : "20px 0"}}>
                        Last Blog Posts 
                    </h3>
                    <Grid container spacing={2} justifyContent="flex-start" alignItems="center">
                        <Grid item xs ={6} sm = {4} md={3} lg={2}>
                            <BlogPostCard />
                        </Grid>
                        <Grid item xs ={6} sm = {4} md={3} lg={2}>
                            <BlogPostCard />
                        </Grid>
                        <Grid item xs ={6} sm = {4} md={3} lg={2}>
                            <BlogPostCard />
                        </Grid>
                        <Grid item xs ={6} sm = {4} md={3} lg={2}>
                            <BlogPostCard />
                        </Grid>
                        <Grid item xs ={6} sm = {4} md={3} lg={2}>
                            <BlogPostCard />
                        </Grid>
                        <Grid item xs ={6} sm = {4} md={3} lg={2}>
                            <BlogPostCard />
                        </Grid>
                        <Grid item xs ={6} sm = {4} md={3} lg={2}>
                            <BlogPostCard />
                        </Grid>
                        <Grid item xs ={6} sm = {4} md={3} lg={2}>
                            <BlogPostCard />
                        </Grid>
                        <Grid item xs ={6} sm = {4} md={3} lg={2}>
                            <BlogPostCard />
                        </Grid>
                        <Grid item xs ={6} sm = {4} md={3} lg={2}>
                            <BlogPostCard />
                        </Grid>
                    </Grid> 

            </div>
        </section>


        <section id="homepageTestimonials">
            <div className="container1250">
                <SliderTwo >
                    <div>
                        <TestimonialCarouselItem/>
                    </div>
                    <div>
                        <TestimonialCarouselItem/>
                    </div>
                    <div>
                        <TestimonialCarouselItem/>
                    </div>
                    <div>
                        <TestimonialCarouselItem/>
                    </div>
                    <div>
                        <TestimonialCarouselItem/>
                    </div>

                </SliderTwo>
                
            </div>
        </section>

        
    </> 
  )
}
