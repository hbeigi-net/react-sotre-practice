import React from 'react'
import {createGlobalStyle} from "styled-components"

const BlogPostStyles = createGlobalStyle`
  /* bpc stands for Blog Post Card  */
  .blogPostCard
  {
    position : relative ; 
    overflow : hidden ; 
    max-width: 235px ;
  }
  .bpcImage
  {
    width : 100% ; 
  }
  .bpcBody
  {
    font-size : 13px ;
    line-height : 18px ; 
    padding : 5px ; 
  }
  .bpcFooter
  {
    text-align : center; 
  }
  .bpcDateArea
  {
    font-size : 13px ; 
    color : grey ; 
  }
`

export default function BlogPostCard() {
  return (
    <>
      <BlogPostStyles/>
      <div className="blogPostCard">
        <div className="bpcHeader">
            <img src="./img/blogImg/blogPost-1.png" className='bpcImage' alt="blogPostOne" />
        </div>
        <div className="bpcBody">
            <p className='bpcSummeyText'>
            If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...
            </p>
        </div>
        <div className="bpcFooter">
            <p className="bpcDateArea">
              01,09,2020
            </p>
        </div>

      </div>
    </>
  )
}
