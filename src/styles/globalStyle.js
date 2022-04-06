import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box !important;
    }
    body {
        color : ${props=> props.mode == "dark" ? "white" : "black"} !important;
        background-color : ${props=> props.mode =='dark' ? "#999999":"#fffeff"} !important ; 
    }
    ul{
      list-style :none ; 
    }
    a{
      text-decoration : none ; 
    }
    button , input 
    {
      font-family : mikhak ; 
    }
    .container1250
    {
        max-width : 1250px ; 
        width : 95vw ; 
        margin : 50px auto ;
    }
    .my-none 
    {
      margin : 0 auto !important; 
    }
`;
