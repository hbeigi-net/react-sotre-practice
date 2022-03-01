import React ,{useState} from 'react'
import styled , {createGlobalStyle} from "styled-components"
import Rating from '@mui/material/Rating';
import {BtnOne} from "../components/subComponents/btns"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
const PcOneStyles = createGlobalStyle`
    /* pc stands for Product Card  */
    #pcOne 
    {
        margin : 100px ; 
        max-width : 234px ; 
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px 25px;
        position: relative;
        /* border: 1px solid #CACDD8; */
        box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
         overflow :hidden ; 
    }
    #pcOneContent
    {
        width :100% ; 
    }
    #pcOne #pcOneContent img 
    {
        width : 100% ;
        display : block ; 
        margin-left : auto ; 
        margin-right : auto ; 
    }
    #pcOne #pcOneContent #pcOneReviews
    {
        margin : 10px 0px ; 
        display : flex ; 
        align-items :center ; 
        justify-content : space-between ;
        font-size:12px ; 
        color : #0e0d0da0;
    }
    #pcOne #pcOneContent #pcOneTitle
    {
        font-size : 13px ;
        line-height : 13px ; 
        font-weight :400 ;  
    }
    #pcOne #pcOneContent #noDiscountPrice
    {
        text-decoration : line-through;
        color : grey ; 
        font-size : 12px ;
        font-weight :400 ;
        line-height : 12px ; 
        margin-top :5px ;   
        
    }
    #pcOne #pcOneContent #pcOnePride
    {
        font-size : 14px ;
        font-weight :400 ; 
    }
    #pcOne #pcOneActionArea
    {
        position : absolute ; 
        top : 10px ; 
        right  : 10px ; 
        display : flex ; 
        flex-direction :column ; 
        align-items :center ; 
        justify-content :center ; 
    }
`
export default function PcOne() {
    const [isLiked, setIsLiked] = useState(true)
  return (
    <>
    <PcOneStyles/>
    <div id="pcOne">
        <div id="pcOneActionArea">
            {
                isLiked ? <FavoriteIcon sx={{color : "red" , cursor : "pointer"}} onClick={()=>{
                    setIsLiked(isLiked=>!isLiked);
                }}/> : <FavoriteBorderIcon onClick={()=>{
                    setIsLiked(isLiked=>!isLiked);
                }} />
            }
            <BarChartRoundedIcon sx={{ cursor : "pointer"}}  />
        </div>
        <div id="pcOneContent">

                
                <img src='./—Pngtree—wireless headphones blue_4347448.png'/>
                
                <div id="pcOneReviews">
                      <Rating name="read-only" value={4.4}  readOnly  size="small" precision={0.1} />
                      Reviews (<span>34</span>)
                </div>

                <h3 id="pcOneTitle">
                    EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...
                </h3>

                <div id="pcOnePriceArea">
                    <p id = "noDiscountPrice">$499.00</p>
                    <p className='pcOnePride'>$480.00</p>
                </div>
                <BtnOne style={{ display : "flex" , alignItems : "center" , justifyContent : 'center' , padding :'3px 10px ' , margin : "4px"}}>
                    <AddShoppingCartIcon sx={{fontSize : "16px" , mr : "10px"}}/>
                     Add to Cart  
                </BtnOne>


        </div>
    </div>
    </>
  )
}
