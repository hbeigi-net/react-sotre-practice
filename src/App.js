import React from "react"
import Store from './pages/store';
import HomeOne from "./pages/home-1";
import {GlobalStyle} from "./styles/globalStyle"
import CatalogOne from "./pages/catalog-1"
import LVPCard from "./components/listViewProductCard";
import ProductInfo from "./components/productInfoComponents/main";
function App() {
  return (
    <>
        <GlobalStyle/>
        <ProductInfo/>
        {/* <LVPCard/> */}
        {/* <HomeOne/> */}
        {/* <Store/> */}
        {/* <CatalogOne/> */}
    </>
  );
}

export default App;
