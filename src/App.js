import React from "react"
import Store from './pages/store';
import HomeOne from "./pages/home-1";
import {GlobalStyle} from "./styles/globalStyle"
import CatalogOne from "./pages/catalog-1"
import LVPCard from "./components/listViewProductCard";
import ProductInfo from "./components/productInfoComponents/main";
import ContactUs from "./pages/contactUs"
import Nav from "./components/nav"
import Mainfooter from "./components/mainFooter"
import TopBar from "./components/topBar"
import Auth from "./pages/auth";
import ShoppintCart from "./pages/shoppintCart";
function App() {
  return (
    <>
        <GlobalStyle/>
        <TopBar/>
        <Nav/>
        {/* <ProductInfo/> */}
        {/* <LVPCard/> */}
        {/* <HomeOne/> */}
        {/* <Store/> */}
        {/* <CatalogOne/> */}
        {/* <ContactUs/> */}
        {/* <Auth/> */}
        <ShoppintCart/>
        <Mainfooter/>
    </>
  );
}

export default App;
