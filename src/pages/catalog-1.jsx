import React from 'react'
import {createGlobalStyle} from "styled-components"
import TopBar from "../components/topBar"
import Nav from "../components/nav"
import BreadCrumbOne from '../components/breadCrumb-1'
import Grid from '@mui/material/Grid'
import ProductCard from "../components/productCard-1"
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import ControlledInput from "../components/controlledSelect"
import IconButton from '@mui/material/IconButton'
import TableRowsSharpIcon from '@mui/icons-material/TableRowsSharp';
import MainFooter from "../components/mainFooter"
const CatalogOneStyles = createGlobalStyle`

  .cpTopBanner{
    width : 100% ; 
    margin-top : 50px ; 
  }

  .pcPaginationFilters
  {
    display : flex ; 
    align-items : center ; 
  }
  .productsGridFilters
  {
    display : flex ; 

  }
  .itemCountsPerPageShow
  {
    color : grey ; 
  }
`
export default function CatalogOne() {
  return (
    <>  
    <CatalogOneStyles/>
    <header>

      <TopBar/>
      <Nav/>

      <div className="container1250">
         <img src="./img/tufGamingBanner.png" className='cpTopBanner' alt="tuf gaming" />
      </div>
      <div className="cpBreadCrump">
        <div className="container1250" style={{marginTop : "-40px"}}>
          <BreadCrumbOne/>
        </div>
      </div>
    </header>
    <main>
      <div className="container1250">
        <h2>
          MSI PS Series (20)
        </h2>
      </div>

      <div className="container1250 my-none">
   
        <Grid container spacing={1} justifyContent="center" alignItems="flex-start">
            <Grid item xs={0} md={3}>

            </Grid>
            <Grid item container justifyContent={{xs : "center" , md : "space-between"}} spacing={1} xs={12} md={9}>
                <Grid item xs ={12}  >
                    <div className="pcPaginationFilters">
                      <p className="itemCountsPerPageShow">
                          25 items per page
                      </p>
                      <div style={{flexGrow : "1"}}></div>
                      <div className="productsGridFilters">
                        <ControlledInput Label="Product Per Page " selectOptions={["15" , '25' , '35']} defalultValue ={"25"} SX={{maxWidth : "100px"}}/>
                        <ControlledInput Label="Sort By :" selectOptions={["position" , "price"]} defalultValue ="price" SX={{maxWidth : "100px" , margin : "0 10px"}}/>
                      </div>
                      <div className="pcGridLayoutActions">
                          <IconButton >
                            <ViewComfyIcon sx={{fontSize : "30px"}}/>
                          </IconButton>
                          <IconButton >
                            <TableRowsSharpIcon sx={{fontSize : "30px"}}/>
                          </IconButton>
                      </div>
                    </div>
                </Grid>
                {
                  [1,2,3,4,5,6,7,8,9,10,11,12].map(item=>
                    {
                      return (
                        <Grid item xs ={6} sm = {4} md ={3} key={item}  >
                           <ProductCard/>
                        </Grid>
                      )
                      
                    })
                }
             

              
            
            </Grid>
        </Grid>
      </div>
    </main>
    <footer>
          <MainFooter/>        

    </footer>
    
    </>
  )
}
