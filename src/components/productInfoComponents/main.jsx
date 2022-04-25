
import React from 'react'
import Rest from "./rest"
import InfoSubheader from "./infoSubheader"
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import AboutProduct from "./aboutProduct"
import Specs from "./specs"; 
import Detail from "./productDetail"
import{useParams} from "react-router-dom"
import {useSelector} from "react-redux"
import { width } from '@mui/system';
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function ProductInfo() {
  const [value, setValue] = React.useState(0);
  const {productId} = useParams();
  const infoProduct = useSelector(state=> state.productReducer.productList.find(item=> item.id == productId)); 

  if(!infoProduct) return <></> 
  return (  
      <>

       <InfoSubheader value ={value} setValue={setValue}/>
       <div className=' infContainer '>
          <Grid container spacing={2}>
             
              <Grid item xs={12} md={8}>
                  <TabPanel value={value} index={0}>
                    <AboutProduct/>
                  </TabPanel>

                  <TabPanel value={value} index={1}>
                          <Detail/>
                  </TabPanel>

                  <TabPanel value={value} index={2}>
                         <Specs/>
                  </TabPanel>
              </Grid>
              <Grid item xs={12} md={4} sx={{boxShadow:" rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px"}}>
                <img src={infoProduct.image} style={{display : "block" ,maxWidth :"300px" ,  margin : "0 auto"}} alt="" />
              </Grid>
          </Grid> 

       </div>
        <Rest/>
      </>
  )
}
