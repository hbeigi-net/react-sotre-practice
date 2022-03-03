import styled from "styled-components";

export const Dot = styled.span`
        height: 10px;
        width: 10px;
        display: inline-block;
        border-radius: 50%;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        -ms-border-radius: 50%;
        -o-border-radius: 50%;
        margin: 3px;
        background-color : ${props=> props.color} ; 
`
export const PICon = styled.span`
        
        font-size: 12px;
        margin: 2px;
        padding: 2px;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
        border-radius: 5px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        -ms-border-radius: 5px;
        -o-border-radius: 5px;
        width: 20px;
        height: 20px;
        text-align: center;
        cursor: pointer;
        color: rgb(252, 31, 116);
        transition: all 300ms ease;
        -webkit-transition: all 300ms ease;
        -moz-transition: all 300ms ease;
        -ms-transition: all 300ms ease;
        -o-transition: all 300ms ease;
        &:hover
        {
                 color: hotpink !important;
        }
`
export const Flex = styled.div`
        display : flex ; 
        flex-direction :  ${props=> props.dir || "row"};
        align-items : ${props=> props.alignItems || "center"};
        justify-content : ${props=> props.justifyContent || "center"}

`
export const TextSm = styled.small`
  font-size: 10px;
  color: rgba(0, 0, 0, 0.438);    
`
export const Font = styled.p`
        font-size : ${props=> props.fs || '1rem'};
        line-height : ${props=> props.lh || '1rem'};
        letter-spacing : ${props=>props.ls || "noraml"}
`

export const NavLogo = styled.img`
        
        width : 100% ; 
        height : 100% ; 
        min-width : 60px ; 
        max-width : 85px ; 
        /* max-height : 100px ;  */
`

