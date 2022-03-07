import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box !important;
    }
    body {
      padding-bottom : 1000px ; 
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
`;
