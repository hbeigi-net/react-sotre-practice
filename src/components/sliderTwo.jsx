import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {createGlobalStyle} from "styled-components"
import {BtnOne} from "./subComponents/btns"
const SliderStylesTwo = createGlobalStyle`
    .sliderTwoMain .slick-dots{
        /* display : inline-block !important ; */
        width : 200px ; 
        right : 100px ; 

    }
    .sliderTwoMain .slick-dots li{
        margin : 0 2px; 
    }

    .sliderTwoMain .slick-dots li button::before
    {
        font-size : 12px ; 
        color : #003cff; 
    }
  
    
  .sliderTwoFloatingButton{
      position : absolute ; 
      left : 180px ; 
      z-index : 10 ; 
  }
`

export default function SliderTwo({children , style ,set}) {
    const settings = {
        arrow : false ,
        infinite: true,
        dots : true ,
        autoplay: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 5000,
        cssEase: "ease"
      };
  return (
      <>
        <SliderStylesTwo/>
        <div className='sliderTwoMain' style={{margin : "30px auto", maxWidth : "900px", width : "95vw" , backgroundColor : "rgb(242, 238, 255)",paddingBottom : "40px", position :"relative"  ,...style}}>
            <Slider {...settings} {...set} >
                {
                    children
                }
        
            </Slider>
            <div className="sliderTwoFloatingButton">
                <BtnOne style={{padding : "3px 10px" , fontSize : "11px"}}>
                    Leave Us A Review 
                </BtnOne>
            </div>
        </div>
      </>
  )
}
