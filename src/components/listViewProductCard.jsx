import React , {useState} from "react"
import {createGlobalStyle} from "styled-components"
import AvailableBadge from "./placeholder-1"
import NotAvailableBadge from "./placeholder-2"
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import IconButton from '@mui/material/IconButton'
import {BtnOne} from "./subComponents/btns"
const LVPstyles = createGlobalStyle`
body{
    padding : 100px ; 
}
    .lvpCard
    {
        position : relative ; 
        width : 800px ; 
        padding : 5px ; 
        box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
        display : flex ; 
        
    }
    .lvp-descrription
    {
        max-width : 40% ; 
        font-size : 13px ; 
        font-weight : 400 ; 
        display :flex ; 
        flex-direction : column ; 
        justify-content : space-around ; 
        color : #333
    }
    .lvp-banner .lvp-image img{
        max-width  : 180px ; 
    }
    .lvp-detail
    {
        width : 20% ; 
        display : flex ; 
        align-items : center ; 
    }
    .lvp-detail .lvp-detailProperty
    {
        font-size : 14px ; 
        padding-right : 20px ; 
    }
    .lvp-detail .lvp-detailValue{
        color : grey ; 
    }
    .lvp-actions
    {
        display : flex ; 
        flex-direction : column ; 
        justify-content : space-between; 
    }
`
export default function LVPCard()
{
    const [isAvailable, setIsAvailable] = useState(true)
    const [hasActions , setHasActions] = useState(true); 
    const [isLiked, setIsLiked] = useState(true)
    return<>
        <LVPstyles/>
        <div className="lvpCard">
            <div className="lvp-banner">
                <div className="lvp-image">
                    <img src="./—Pngtree—wireless headphones blue_4347448.png"  alt="" />
                </div>
            </div>
            <div className="lvp-descrription">
                    <p className="lvp-modelName">
                      SKU D5515AI
                    </p>
                    <p className="lvp-desc">
                    MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop
                    </p>
                    <p className="lvp-priceArea">
                        {   true && <span className="lvp-discountedPrice">
                            {560}.00 $
                        </span>
                        }
                        {
                            499
                        }$
                    </p>
                    <BtnOne style={{width : "130px" , padding : "3px 10px"}}>
                        add To cart
                    </BtnOne>
            </div>
            <div style={{flexGrow : "1"}}></div>
            <div className="lvp-detail">
                        <table>
                            <tbody>
                                <tr>
                                    <td className="lvp-detailProperty">
                                        CPU
                                    </td>
                                    <td className="lvp-detailValue" >
                                        N/A
                                    </td>
                                </tr>
                                <tr>
                                    <td className="lvp-detailProperty">
                                        CPU
                                    </td>
                                    <td className="lvp-detailValue" >
                                        N/A
                                    </td>
                                </tr>
                                <tr>
                                    <td className="lvp-detailProperty">
                                        CPU
                                    </td>
                                    <td className="lvp-detailValue" >
                                        N/A
                                    </td>
                                </tr>
                            </tbody>
                        </table>
            </div>
            <div className="lvp-actions">
                <div className="lvp-availability">
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
            </div>

        </div>

    </>

}