import React from 'react'
import {createGlobalStyle} from "styled-components"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PcOne from './productCard-1'
const HoverMenuOneStyles = createGlobalStyle`
    #hoverMenuOne
    {
        box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
        width : 90vw ; 
        background-color : #f1f1f1 ;    
        margin : 20px ; 
    }
    .hmContainer
    {
        font-size : 13px ; 
        display : flex ; 
        justify-content : center ;
    

    }
    .hmfl-item
    {
        display : flex ; 
        align-items : center ; 
        justify-content : space-between ; 
        line-height : 40px ; 
        width : 100% ;
    }
    .hmProductsArea
    {
        display : flex ; 
    }
    .hmFirstList , .hmSubListOne , .hmSubListTwo , .hmProductsArea
    {
        padding : 10px; 
    
    }
    .hmFirstList , .hmSubListOne , .hmSubListTwo
    {
        border-right : 1px solid #3131311f ; 
    }

    .hmSubListOne 
    {
        width: 17% ; 
    }
    .hmSubListTwo
    {
        width: 17% ; 

    }
    .hmFirstList
    {
        width : 23% ; 
    }
    .hoverMenuFooter
    {
        width : 100% ; 
        position : relative ; 
        border-top : 1px solid #3131311f ; 
        padding : 10px 40px ; 
    }
    .hmbrandsArea
    {
        width : 100% ; 
        display : flex ; 
        align-items : center ; 
        justify-content : space-between ; 
    }
    .brandsLogoIMG{
        max-width : 150px ; 
        width : 100% ; 
    }

    
`
export default function HoverMenu() {
  return (
    <>
        <HoverMenuOneStyles/>
        <div id="hoverMenuOne">
            <div className="hmContainer">
                <div className="hmFirstList">
                        <ul className='hmfl-list'>
                            <li className='hmfl-item'>
                                Everyday Use Notebooks <ChevronRightIcon sx={{fontSize:"16px"}}/>
                            </li>
                            <li className='hmfl-item'>
                            MSI Workstation Series<ChevronRightIcon sx={{fontSize:"16px"}}/>
                            </li>
                            <li className='hmfl-item'>
                            MSI Prestige Series
                            </li>
                            <li className='hmfl-item'>
                            Gaming Notebooks
                            </li>
                            <li className='hmfl-item'>
                            Tablets And Pads
                            </li>
                            <li className='hmfl-item'>
                                Netbooks
                            </li>
                            <li className='hmfl-item'>
                            Infinity Gaming Notebooks
                            </li>
                        </ul>
                </div>
                <div className="hmSubListOne">
                          <ul className='hmsol-list'>
                                <li className='hmfl-item'>
                                    Everyday Use Notebooks <ChevronRightIcon sx={{fontSize:"16px"}}/>
                                </li>
                                <li className='hmfl-item'>
                                    Everyday Use Notebooks <ChevronRightIcon sx={{fontSize:"16px"}}/>
                                </li>
                          </ul>
                </div>
                <div className="hmSubListTwo">

                            <ul className='hmsol-list'>
                                    <li className='hmfl-item'>
                                    MSI WS Series ({12})
                                    </li>
                                    <li className='hmfl-item'>
                                    MSI WS Series ({33})
                                    </li>
                                    <li className='hmfl-item'>
                                    MSI WS Series ({11})
                                    </li>
                          
                            </ul>
                </div>
                <div className="hmProductsArea">
                    <PcOne activeActions ={false} noShadow/>
                    <PcOne activeActions ={false} noShadow/>
                </div>
            </div>
            <div className="hoverMenuFooter">
                <div className="hmbrandsArea">
                    <img src="./img/brandsLogo/adata.png" alt="" className='brandsLogoIMG' />
                    <img src="./img/brandsLogo/gigabyte.png" alt="" className='brandsLogoIMG' />
                    <img src="./img/brandsLogo/hewlett.png" alt="" className='brandsLogoIMG' />
                    <img src="./img/brandsLogo/raz-r.png" alt="" className='brandsLogoIMG' />
                    <img src="./img/brandsLogo/roccat.png" alt="" className='brandsLogoIMG' />
                    <img src="./img/brandsLogo/thermaltake.png" alt="" className='brandsLogoIMG' />
                </div>
            </div>
        </div>
    </>
  )
}


