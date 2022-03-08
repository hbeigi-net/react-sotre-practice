import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {createGlobalStyle} from "styled-components"
import IconButton from '@mui/material/IconButton'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
const SliderStylesTwo = createGlobalStyle`

    .sliderTwoNextArrow
    {
        position : absolute ; 
        color : red ;
        top : 50% ; 
        transform : translate(0 , -50%) ;
        left : 0 ; 
        background-color : #44434342 ; 
        border-radius :  0 50px 50px 0; 
    }
    .sliderTwoPrevArrow
    {
        position : absolute ; 
        color : red ;
        top : 50% ;  
        background-color : #44434342 ; 
        right : 0 ; 
        z-index : 10 ; 
        transform : translate(0 , -50%) ;
        border-radius : 50px 0 0 50px ; 
    }
    .hoverSliderTwoArrow
    {
      transition : all 300ms ease ; 
    }
    .hoverSliderTwoArrow:hover{
      background-color : #928181d2 ; 
    }
`
function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className='sliderTwoNextArrow hoverSliderTwoArrow'
        onClick={onClick}
      >
          <IconButton >
                <ArrowBackIosRoundedIcon sx={{color : "white"}}/>   
          </IconButton> 
      </div>
    );
  }
  
function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="sliderTwoPrevArrow hoverSliderTwoArrow"
        onClick={onClick}
      >

            <IconButton >
                <ArrowForwardIosRoundedIcon sx={{color : "white"}}/>   
            </IconButton>
      </div>
    );
  }
export default function SliderTwo({children , style ,set}) {
    const settings = {

        infinite: true,
        speed: 500,

        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />

      };
  return (
      <>
        <SliderStylesTwo/>
        <div style={{margin : "30px auto", maxWidth : "1250px", width : "95vw"  ,...style}}>
            <Slider {...settings} {...set} >
                {
                    children
                }
        
            </Slider>
        </div>
      </>
  )
}
