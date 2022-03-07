import React from "react"
import Store from './pages/store';
import HomeOne from "./pages/home-1";
import {GlobalStyle} from "./styles/globalStyle"
function App() {
  return (
    <>
        <GlobalStyle/>
        <HomeOne/>
        {/* <Store/> */}
    </>
  );
}

export default App;
