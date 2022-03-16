import React from "react"
import Store from './pages/store';
import HomeOne from "./pages/home-1";
import {GlobalStyle} from "./styles/globalStyle"
import CatalogOne from "./pages/catalog-1"
import LVPCard from "./components/listViewProductCard";
function App() {
  return (
    <>
        <GlobalStyle/>
        <LVPCard/>
        {/* <HomeOne/> */}
        {/* <Store/> */}
    </>
  );
}

export default App;
