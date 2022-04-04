import React , {useState} from 'react'
import {NavLink} from "react-router-dom"
import MiniCart from "./miniCart-1"
// import Btn from './subComponents/button1'
import {BtnOne} from './subComponents/btns'
import IconButton from '@mui/material/IconButton';
import {NavLogo} from "./smallENT"
import {createGlobalStyle} from "styled-components"
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';



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
    .navbarSearchBar
    {
      flex-grow : 1; 
      background-color : #eefacc;
      position : relative ; 
      overflow : hidden ; 
      border-radius : 20px ; 
      display : flex ; 
      align-items : center ;
      justify-content : space-between ; 
      /* line-height  : 10px ;  */

    }
    .navbarSearchBar #topNavSearchInput{
      background-color : transparent ; 
      outline : none ; 
      border : none ; 
      width : 80% ; 
      padding : 10px ; 
      
    }
    .navbarSearchBar  .topNavSearchActionIcons
    {
      margin-right : 10px ; 
    }
    `
export default function Nav() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [visibleMiniCart , setVisibleminiCart] = useState(false)
  return (
    <>
        <NavStyles/>
        <div className="navbarContainer">
            <div id="lgScreenNav">
                <NavLogo src = "./img/Logo.png" />
                { !searchOpen &&
                   <ul className ='topNavList'>
                                 <NavLink to='/'>
                                    Home page
                                  </NavLink>
                                  <NavLink to='/store?search=laptops'>
                                    LapTops
                                  </NavLink>
                                  <NavLink to='/store?search=pcs'>
                                    Desktop PCs
                                  </NavLink>
                                  <NavLink to='/store?search=network-devices'>
                                    Networking Devices
                                  </NavLink>
                                  <NavLink to='/store?search=printers-scanners'>
                                    Printers&Scanners
                                  </NavLink>
                                  <NavLink to='/store?pcParts'>
                                    PC Parts
                                  </NavLink>
                                  <NavLink to='/store?search=others'>
                                    All Other Products 
                                  </NavLink>
                           
                             
                    </ul>
                }
                {
                  searchOpen && 
                  <div className="navbarSearchBar">
                    <input type="text" id='topNavSearchInput' placeholder='Search entiere store here' />
                      <div className="topNavSearchActionIcons">
                        <IconButton aria-label="search" color='primary' >
                           <SearchIcon color='black'sx={{color :"#333" , fontSize : "20px"}}/>
                        </IconButton>
                        <IconButton aria-label="search" color='primary' onClick={()=>setSearchOpen(false)} >
                           <HighlightOffIcon color='black'sx={{color :"#333" , fontSize : "20px"}}/>
                        </IconButton>
                      </div>
                  </div>
                }

                <div id="useAreaNav">
                { !searchOpen &&  <IconButton aria-label="search" color='primary' >
                     <SearchIcon color='black'sx={{color :"#333" , fontSize : "20px"}} onClick={()=>setSearchOpen(true)}/>
                  </IconButton>}
                  <IconButton aria-label="search" color='primary' sx={{position : "relative"}}  onMouseEnter={()=>setVisibleminiCart(true) } onMouseLeave={()=>setVisibleminiCart(false)}>
                  <MiniCart isOpen={visibleMiniCart}/>
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
