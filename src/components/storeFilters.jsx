import React from 'react'
import {createGlobalStyle} from "styled-components"
import FilterInput from '../components/filterInput'
import RangeFilter from './rangeFilter'
import Button from '@mui/material/Button'
import BrandsLogoBar from "./brandsLogoBar"
const FiltersStyles = createGlobalStyle`

    .filtersCotainer
    {
        padding-top : 10px ; 
        background-color : #eee ; 
    }
    .filtersCotainer .filters
    {
        margin-bottom : 30px ;    
    }
    .filtersCotainer  h4
    {
        color : #010100 ; 
        padding-left : 10px ; 

    }
    .filtersBottomBaner {
        margin :0 ; 
        padding : 0 ; 
    } 
    .filtersBottomBaner img 
    {
        width : 100%;
        margin-bottom : -20px ; 
    }
`
const brandsFilter = [
    'apple' , 
    'asus' ,
    'dell' , 
    'hp' , 
    'intel', 
    'huawei'
]
const productsFitler = [
    'smart phone', 
    'headset' ,
    'laptop' , 
    'custom pc' , 
    'speakers' , 
]
const colorsFilter = [
    'red' , 
    'black' , 
    "white" , 
]
export default function Filters() {
  return (
    <>
        <FiltersStyles/>
        <div className="filtersCotainer">
            <h4>filters</h4>
            <div className="filters">
                <FilterInput chooseOption={brandsFilter} label ={"Brand"} sx={{margin: "20px 0px" , padding : "10px"}}/>
                <FilterInput chooseOption={productsFitler} label ={"Product"} sx={{margin: "20px 0px" , padding : "10px"}}/>
                <FilterInput chooseOption={colorsFilter} label ={"color"} sx={{margin: "20px 0px" , padding : "10px"}}/>
                <RangeFilter /> 
                <Button variant="contained" color="primary" sx={{ disply : "block" , margin : "10px"}}>
                    Appy Filters 
                </Button>
            </div>
            <BrandsLogoBar column ={true} />
            <div className="filtersBottomBaner">
                <img src="./img/iconSeri.png" alt="" />
            </div>
        </div>
    </>
  )
}
