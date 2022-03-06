import React from 'react'
import {createGlobalStyle} from "styled-components"
import Slider from "../components/sliderOne"
import Nav from "../components/nav"
import TopBar from "../components/topBar"
import ProductCart from "../components/productCard-1"

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

`
export default function HomeOne() {
  return (
      <>
      <HomeOneStyles/>
    <TopBar/>
    <Nav/>
      
    <Slider style={{marginTop:"100px"}}>
        <div>
            <img src='./img/homeOneTopSlider/image 26.png'/>
        </div>
 
        <div>
            <img src='./img/homeOneTopSlider/image 26.png'/>
        </div>
 
        <div>
            <img src='./img/homeOneTopSlider/image 26.png'/>
        </div>
 
        <div>
            <img src='./img/homeOneTopSlider/image 26.png'/>
        </div>
    </Slider>
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
      </>
  )
}
