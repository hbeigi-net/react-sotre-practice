import React from 'react'
import {NavLink} from "react-router-dom"
import Btn from './subComponents/button1'
import {BtnOne} from './subComponents/btns'
import IconButton from '@mui/material/IconButton';
import {NavLogo} from "./smallENT"
import {createGlobalStyle} from "styled-components"
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
const NavStyles = createGlobalStyle`
    .navbarContainer
    {
      width : 100vw ; 
      display : flex ; 
      align-items : center ; 
      justify-content : center ; 
      position :fixed ; 
      top : 25px ; 
      z-index : 100 ; 
      background-color:#e4c745 ; 
      box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    }
    #lgScreenNav{
      display : flex ; 
      align-items : center ; 
      justify-content : space-between;
      max-width : 1250px ; 
        /* padding : 5px 20px ; */
         width : 95vw; 

  
    }
    .topNavList{
      display : flex ; 
      align-items : center ; 
      justify-content : flex-start ; 
    }
    .topNavList a 
    {
      font-size : 13px ; 
      margin : 0 10px ; 
      transition : all 300ms ease ; 
      color : black ; 
      &:active {
        color : blue ; 
      }
    }
    .topNavList a.active{
      color : blue ;  
    } 

    #useAreaNav
    {
      display :flex ; 
      align-items : center ; 
      justify-content : space-between ; 
    }
`
export default function Nav() {
  return (
    <>
        <NavStyles/>
        <div className="navbarContainer">
            <div id="lgScreenNav">
                <NavLogo src = "./img/Logo.png" />
                <ul className ='topNavList'>
                  <NavLink to='/1'>
                    LapTops
                  </NavLink>
                  <NavLink to='/2'>
                    Desktop PCs
                  </NavLink>
                  <NavLink to='/3'>
                    Networking Devices
                  </NavLink>
                  <NavLink to='/4'>
                    Printers&Scanners
                  </NavLink>
                  <NavLink to='/5'>
                    PC Parts
                  </NavLink>
                  <NavLink to='/6'>
                    All Other Products 
                  </NavLink>
                  <NavLink to='/'>
                    Repairs
                  </NavLink>
                  <NavLink to='/33'>
                    <BtnOne>
                      Our Deals
                    </BtnOne>
                  </NavLink>
                </ul>
                <div id="useAreaNav">
                  <IconButton aria-label="search" color='primary' >
                     <SearchIcon color='black'sx={{color :"#333" , fontSize : "20px"}}/>
                  </IconButton>
                  <IconButton aria-label="search" color='primary' >

                  <Badge badgeContent={4}  color="primary" sx={{color :"#333"}}>
                      <ShoppingCartIcon  sx={{color :"#333" , fontSize : "20px"}}/>
                  </Badge>
                  </IconButton>
                  <Avatar src="./img/1.jpg"   sx={{ width: 40, height: 40 , margin : "0 15px " }} />
                </div>
            </div>
        </div>
    </>
  )
}
