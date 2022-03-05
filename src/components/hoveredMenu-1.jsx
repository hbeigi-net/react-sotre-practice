import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PcOne from "./productCard-1";
import BrandsBar from "./brandsLogoBar";
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
        position : relative ; 
    

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
     .hmProductsArea
    {
        padding : 10px; 
    
    }
    .hmFirstList , .hmSubListOne , .hmSubListTwo
    {
        border-right : 1px solid #3131311f ; 
    } 

    .hoverMenuFooter
    {
        width : 100% ; 
        position : relative ; 
        border-top : 1px solid #3131311f ; 
        padding : 10px 40px ; 
    }


    .hmFirstList ul ,.hmSubListOne ul ,.hmSubListTwo ul  {
        padding : 10px 0px ; 
    }
    .hmFirstList ul li , .hmSubListOne ul li ,.hmSubListOne ul li
    {
        padding :0 10px ; 
    }

    .hmFirstList
    {
        width : 23% ; 
    }

    .hmSubListOne 
    {
        width: 19% ; 
        position : absolute ; 
        top : 0 ; 
        left : 23% ; 
        height : 100% ; 
        background-color : #f1f1f1 ; 
        z-index : 10 ; 
        display : none ; 
        transition : all 400ms ease ; 
    }
    .hmSubListTwo
    {
        width: 100%; 
        position : absolute ; 
        top : 0 ; 
        left :101%; 
        height : 100% ; 
        background-color : #f1f1f1 ; 
        z-index : 10 ; 
        display : none ; 
        transition : all 400 ease ; 

    }

    .hmfl-item:first-child:hover > .hmSubListOne  , .hmSubListOne .hmfl-item:hover  .hmSubListTwo 
    {
        display : block ; 
    }
    
`;
export default function HoverMenu() {

 
  return (
    <>
      <HoverMenuOneStyles  />
      <div id="hoverMenuOne">
        <div className="hmContainer">

          <div className="hmFirstList">
            <ul className="hmfl-list">

              <li className="hmfl-item" >
                Everyday Use Notebooks{" "}
                <ChevronRightIcon sx={{ fontSize: "16px" }} />
                

                    <div className="hmSubListOne">
                        <ul className="hmsol-list">
                            <li className="hmfl-item">
                                        Everyday Use Notebooks{" "}
                                        <ChevronRightIcon sx={{ fontSize: "16px" }} />


                                                        
                                    <div className="hmSubListTwo">
                                            <ul className="hmsol-list">
                                            <li className="hmfl-item">MSI WS Series ({12})</li>
                                            <li className="hmfl-item">MSI WS Series ({33})</li>
                                            <li className="hmfl-item">MSI WS Series ({11})</li>
                                            </ul>
                                    </div>
                

                            </li>
                            <li className="hmfl-item">
                                Everyday Use Notebooks{" "}
                                <ChevronRightIcon sx={{ fontSize: "16px" }} />
                            </li>
                        </ul>

                    </div>

          








              </li>

              
              <li className="hmfl-item"> MSI Workstation Series<ChevronRightIcon sx={{ fontSize: "16px" }} /> </li>
              <li className="hmfl-item">MSI Prestige Series</li>
              <li className="hmfl-item">Gaming Notebooks</li>
              <li className="hmfl-item">Tablets And Pads</li>
              <li className="hmfl-item">Netbooks</li>
              <li className="hmfl-item">Infinity Gaming Notebooks</li>
            </ul>
          </div>
   

          <div className="hmProductsArea">
            <PcOne activeActions={false} noShadow />
            <PcOne activeActions={false} noShadow />
            <PcOne activeActions={false} noShadow />
            <PcOne activeActions={false} noShadow />
          </div>


        </div>

        <div className="hoverMenuFooter">
          <BrandsBar />
        </div>


      </div>
    </>
  );
}
