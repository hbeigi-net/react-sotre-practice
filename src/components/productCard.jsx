import React from 'react'
import {createGlobalStyle} from "styled-component"


const CardStyle =createGlobalStyle`
  
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.productCard {
  padding: 5px;
  background-color: #e3edf7;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  max-width: 180px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
  font-size: 14px;
}
.pcHeader {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 5px;
}
.pcIcon {
  font-size: 12px;
  margin: 2px;
  padding: 2px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
  width: 20px;
  height: 20px;
  text-align: center;
  cursor: pointer;
  color: rgb(252, 31, 116);
  transition: all 300ms ease;
  -webkit-transition: all 300ms ease;
  -moz-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  -o-transition: all 300ms ease;
}
.pcIcon:hover
{
    color: hotpink !important;
}
.pcImgContainer {
  position: relative;
  overflow: hidden;
}
.pcImg {
  width: 100%;
  height: 100%;
}
.pcTitle {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.pTitle {
  font-size: 12px;
  line-height: 12px;
}
.pSubtitle {
  font-size: 10px;
  color: rgba(0, 0, 0, 0.438);
}

.colorContainer {
  display: flex;
}
.pColor {
  height: 10px;
  width: 10px;
  display: inline-block;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  margin: 3px;
}
.pcPrice {
  padding: 0px 15px;
  color: rgb(11, 107, 16);
}

`
export default function ProductCard() {
  return (
    <>
        <CardStyle/>
        <div class="productCard">
            <div class="pcHeader">
                <span class="pcIcon controlIconHover">
                    <i class="fa-solid fa-heart"></i>
                </span>  
                <span class="pcIcon controlIconHover">
                    <i class="fa-solid fa-cart-plus"></i>
                </span>  
                <span class="pcIcon controlIconHover">
                    <i class="fa-solid fa-shuffle"></i>
                </span>
            </div>
            <div class="pcImgContaier">
                <img src="./—Pngtree—wireless headphones blue_4347448.png" class="pcImg"  alt=""/>
            </div>
            <div class="pcTitle">
                <div class="pTitle">
                    <p>
                        Beats headphone
                    </p>
                    <small class="pSubtitle">
                        solo2 stn 019 Bluthooth
                    </small>
                    <div class="colorContainer">
                        <span class="pColor" style="background-color: black;"></span>
                        <span class="pColor" style="background-color: rgb(233, 7, 7);"></span>
                        <span class="pColor" style="background-color: rgb(30, 7, 233);"></span>
                    </div>
                   
                </div>
                <span class="pcPrice">
                    399 $
                </span>
            </div>
        </div>
    </>
  )
}
