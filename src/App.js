import React , {useEffect} from "react"
import {Routes , Route} from "react-router-dom"
import HomeOne from "./pages/home-1";
import {GlobalStyle} from "./styles/globalStyle"
import CatalogOne from "./pages/catalog-1"
import ProductInfo from "./components/productInfoComponents/main";
import ContactUs from "./pages/contactUs"
import Nav from "./components/nav"
import Mainfooter from "./components/mainFooter"
import TopBar from "./components/topBar"
import Auth from "./pages/auth";
import ShoppintCart from "./pages/shoppintCart";
import {useThemeMe} from "./contexts/themeContext"
import AutnReq from "./components/authRequired"
import {useDispatch} from "react-redux"
import {load_producs} from "./store/slices/productSlice"
function App() {
  const {themeMode} = useThemeMe();  
  const dispatch = useDispatch(); 
  useEffect(()=>
  {
    setTimeout(()=>
    {
      dispatch(load_producs("sent from app as payload for load product")); 
    } , 3000); 
  },[])
  return (
    <>
        <GlobalStyle mode ={themeMode}/>
        <Routes>
            <Route path="/" element={<HomeOne/>}></Route>
            <Route path="store" element={<CatalogOne/>}></Route>
            <Route path="store/:productId" element={<ProductInfo/>}></Route>
            <Route path="auth" element={<Auth/>}></Route>
            <Route path="shopping-cart" element={ <AutnReq> <ShoppintCart/> </AutnReq>}></Route>
            <Route path="contact-us" element={<ContactUs/>}></Route>
        </Routes>
        <TopBar/>
        <Nav/>
        <Mainfooter/>
    </>
  );
}

export default App;
