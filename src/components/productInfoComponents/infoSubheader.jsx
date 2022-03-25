import React from "react"
import {createGlobalStyle} from "styled-components"
import Grid from '@mui/material/Grid'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
const SubHeaderStyles = createGlobalStyle`
    .infContainer{
        width : 95vw ; 
        max-width : 1250px ; 
        margin : 0 auto ; 
    }
    .infCotainerFluid
    {
        width : 100% ; 
        position : relative ; 
        overflow-x : hidden ; 
    }
    .info-mainDiv 
    {
        margin-top : 100px ; 
        z-index : 100 ; 
        margin-bottom : 20px ; 
        background-color : white; 
        box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;       
            }
`
export default function InfoSubheader({value , setValue})
{


    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return <>
        <SubHeaderStyles/>
        <div className="info-mainDiv infContainerFluid">
            <div className="infContainer ">
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12}  md={4}>
                            <Box sx={{ width: '100%' }}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                    <Tab label="About Product" {...a11yProps(0)} />
                                    <Tab label="Detail" {...a11yProps(1)} />
                                    <Tab label="Specs" {...a11yProps(2)} />
                                    </Tabs>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item  xs={0}  md={4}></Grid>

                        <Grid item xs={12}  md={4}>
                            <Button variant="contained" color="primary" sx={{borderRadius : "20px"}} >
                                Add to cart
                            </Button>
                            <TextField
                              id="num_to_add_to_cart"
                              label="count"
                              variant="outlined"
                              color="primary"
                              sizes="small"
                              sx={{margin :"0 10px"}}
                              value={value}
                              onChange={(e,newVal)=>{
                    
                                  setValue(+e.target.value);
                              }}
                              
                            />
                        </Grid>
                        
                    </Grid> 
            </div>

        </div>
    </>
}