import React from "react"
import Store from './pages/store';
import HomeOne from "./pages/home-1";
import {GlobalStyle} from "./styles/globalStyle"
import CatalogOne from "./pages/catalog-1"
function App() {
  return (
    <>
        <GlobalStyle/>
        <CatalogOne/>
        {/* <HomeOne/> */}
        {/* <Store/> */}
    </>
  );
}

export default App;
