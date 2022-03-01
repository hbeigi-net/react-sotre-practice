import React from 'react'
import styled ,  {createGlobalStyle} from "styled-components"
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
const Placeholder = styled.p`
    display : inline-flex;
    align-items : center ; 
    padding :3px ; 
    color : #d80505;
    font-size : 12px ; 
`
export default function PlaceholderOne() {
  return (
    <Placeholder >
        <HighlightOffIcon sx={{fontSize : "12px" , mx:"5px"}}/>
        check availability
    </Placeholder>
  )
}
