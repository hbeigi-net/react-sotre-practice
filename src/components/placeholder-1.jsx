import React from 'react'
import styled ,  {createGlobalStyle} from "styled-components"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Placeholder = styled.p`
    display : inline-flex;
    align-items : center ; 
    padding :3px ; 
    color : #59d805;
    font-size : 12px ; 
`
export default function PlaceholderOne() {
  return (
    <Placeholder >
        <CheckCircleIcon sx={{fontSize : "12px" , mx:"5px"}}/>
        in stock 
    </Placeholder>
  )
}
