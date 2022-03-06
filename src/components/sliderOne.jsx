import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {createGlobalStyle} from "styled-components"
import IconButton from '@mui/material/IconButton'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
const TopSliderStyles = createGlobalStyle`
    .topSliderNextArrow
    {
        position : absolute ; 
        color : red ;
        top : 50% ; 
        transform : translate(0 , -50%) ;
        left : 0 ; 
        background-color : #ffffff42 ; 
        border-radius :  0 50px 50px 0; 
    }
    .topSliderPrevArrow
    {
        position : absolute ; 
        color : red ;
        top : 50% ;  
        background-color : #ffffff42 ; 
        right : 0 ; 
        z-index : 10 ; 
        transform : translate(0 , -50%) ;
        border-radius : 50px 0 0 50px ; 
    }
`
function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className='topSliderNextArrow'
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
        className="topSliderPrevArrow"
        onClick={onClick}
      >

            <IconButton >
                <ArrowForwardIosRoundedIcon sx={{color : "white"}}/>   
            </IconButton>
      </div>
    );
  }
export default function SliderOne({children}) {
    const settings = {
        className: "center",
        centerPadding: "60px",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />

      };
  return (
      <>
        <TopSliderStyles/>
        <div style={{margin : "30px auto", maxWidth : "95vw"  , padding:"15px"}}>
            <Slider {...settings}>
                {
                    children
                }
        
            </Slider>
        </div>
      </>
  )
}
