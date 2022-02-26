import styled from "styled-components";


export const BtnOne = styled.button`
    border-radius : 20px ;
    padding : 5px 15px ; 
    color : ${props=> props.color?props.color : "#0044d8d6"};
    border : 1px solid ${props=> props.color?props.color : "#0044d8d6"};
    cursor: pointer;
    background-color  : transparent ; 
    transition : all 200ms ease ; 
    &:hover
    {
        box-shadow: 0 0 1px #9521f340, 0 0 4px #c600ee45, 0 0 8px #f704f737;
    }
    &:active
    {
        box-shadow : none ; 
    }
`