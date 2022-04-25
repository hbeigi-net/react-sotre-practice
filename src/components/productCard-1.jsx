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
import {useNavigate} from "react-router-dom"
import {useSelector , useDispatch} from "react-redux"
import {like_product , unlike_product} from "../store/slices/productSlice"
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
        height : 250px ; 
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
export default function PcOne({activeActions=true , noShadow=false , product}) {
    const [isLiked, setIsLiked] = useState(false)
    const [isAvailable, setIsAvailable] = useState(true)
    const [hasDiscount, setHasDiscount] = useState(true)
    const [hasActions , setHasActions] = useState(false); 
    const ifLiked = useSelector(state=> state.productReducer.likedProducts);
    const [pInfo, setPInfo] = useState('')
    const dispatch = useDispatch(); 
    const navigate = useNavigate(); 
    useEffect(() => {
        setHasActions(activeActions)
        setPInfo(product)
  
        ifLiked.map(item=> {
            if(pInfo.id == item.id)
            {
                setIsLiked(true)
            }
        })
    }, [])
    
    if(!pInfo)return<></> ; 
  return (
    <>
        <PcOneStyles />
        <PcOneCON className='pcOne' style={noShadow?{boxShadow : "none"}:{}}  >
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
                                    dispatch(unlike_product({id : pInfo.id}))
                                }}/> : <FavoriteBorderIcon onClick={()=>{
                                    setIsLiked(isLiked=>!isLiked);
                                    dispatch(like_product({id : pInfo.id}))
                                }} />
                            }
                            </IconButton>
                            <IconButton >
                                <BarChartRoundedIcon sx={{ cursor : "pointer"}}  />
                            </IconButton>
                        
                        </div>
            }
            <div className="pcOneContent" onClick={(e)=>{ 
                e.stopPropagation(); 
                navigate(`/store/${product.id}`)}}>

                    
                    <img src={pInfo.image}/>
                    
                    <div className="pcOneReviews">
                        <Rating name="read-only" value={pInfo.rating.rate}  readOnly  size="small" precision={0.1} />
                        Reviews (<span>{pInfo.rating.count}</span>)
                    </div>

                    <h3 className="pcOneTitle">
                            {pInfo.title.slice(0,25)}...
                    </h3>
                
                    <div className="pcOnePriceArea">
                        {hasDiscount && <p className="noDiscountPrice">${pInfo.price}</p>}
                        <p className='pcOnePrice'>${pInfo.price}</p>
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
