import React ,{useState , useEffect} from 'react'
import styled ,{createGlobalStyle} from "styled-components"
import Rating from '@mui/material/Rating';
import {BtnOne} from "../components/subComponents/btns"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import IconButton from '@mui/material/IconButton'
import AvailableBadge from "./placeholder-1"
import NotAvailableBadge from "./placeholder-2"
const PcOneCON = styled.div`
        max-width : 234px ; 
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px 25px;
        position: relative;
        box-shadow:rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
        overflow :hidden ; 
`
const PcOneStyles = createGlobalStyle`
    /* pc stands for Product Card  */
    .pcOne
    {
        margin : 0 auto ; 
    }
    .pcOneContent
    {
        width :100% ; 
 
    }
    .pcOne .pcOneContent img 
    {
        width : 100% ;
        display : block ; 
        margin-left : auto ; 
        margin-right : auto ; 
    }
    .pcOne .pcOneContent .pcOneReviews
    {
        margin : 10px 0px ; 
        display : flex ; 
        align-items :center ; 
        justify-content : space-between ;
        font-size:12px ; 
        color : #0e0d0da0;
    }
    .pcOne .pcOneContent .pcOneTitle
    {
        font-size : 13px ;
        line-height : 13px ; 
        font-weight :400 ;  
    }
    .pcOne .pcOneContent .noDiscountPrice
    {
        text-decoration : line-through;
        color : grey ; 
        font-size : 12px ;
        font-weight :400 ;
        line-height : 12px ; 
        margin-top :5px ;   
        
    }
    .pcOne .pcOneContent .pcOnePrice
    {
        font-size : 14px ;
        font-weight :400 ;
    }
    .pcOne .pcOneActionArea
    {
        position : absolute ; 
        top : 10px ; 
        right  : 10px ; 
        display : flex ; 
        flex-direction :column ; 
        align-items :center ; 
        justify-content :center ; 
    }
    .BadgeArea
    {
        position : absolute ; 
        top : 0 ; 
        left : 0 ; 
    }
`
export default function PcOne({activeActions=true , noShadow=false}) {
    const [isLiked, setIsLiked] = useState(true)
    const [isAvailable, setIsAvailable] = useState(true)
    const [hasDiscount, setHasDiscount] = useState(true)
    const [hasActions , setHasActions] = useState(false); 
    useEffect(() => {
        setHasActions(activeActions)
    }, [])
    
    
  return (
    <>
    
    <PcOneStyles />
    
 
    <PcOneCON className='pcOne' style={noShadow?{boxShadow : "none"}:{}} >
        <div className="BadgeArea">
            {
                isAvailable ? <AvailableBadge/> : <NotAvailableBadge/>
            }
        </div>
        {
                    hasActions &&
                    <div className="pcOneActionArea">
                        <IconButton >
                        {
                            isLiked ? <FavoriteIcon sx={{color : "red" , cursor : "pointer"}} onClick={()=>{
                                setIsLiked(isLiked=>!isLiked);
                            }}/> : <FavoriteBorderIcon onClick={()=>{
                                setIsLiked(isLiked=>!isLiked);
                            }} />
                        }
                        </IconButton>
                        <IconButton >
                            <BarChartRoundedIcon sx={{ cursor : "pointer"}}  />
                        </IconButton>
                    
                    </div>
        }
        <div className="pcOneContent">

                
                <img src='./—Pngtree—wireless headphones blue_4347448.png'/>
                
                <div className="pcOneReviews">
                      <Rating name="read-only" value={4.4}  readOnly  size="small" precision={0.1} />
                      Reviews (<span>34</span>)
                </div>

                <h3 className="pcOneTitle">
                    EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...
                </h3>
             
                <div className="pcOnePriceArea">
                    {hasDiscount && <p className="noDiscountPrice">$499.00</p>}
                    <p className='pcOnePrice'>$480.00</p>
                </div>
                {  hasActions&&
                <BtnOne style={{ display : "flex" , alignItems : "center" , justifyContent : 'center' , padding :'3px 10px ' , margin : "4px"}}>
                    <AddShoppingCartIcon sx={{fontSize : "16px" , mr : "10px"}}/>
                     Add to Cart  
                </BtnOne>

                }
        </div>
    </PcOneCON>
    </>
  )
}
