import React from 'react'
import styled , {createGlobalStyle} from "styled-components"
import {Dot , PICon , Flex ,TextSm , Font} from "./smallENT"


const ProductCard = styled.div`
  padding: 5px;
  background-color: #e3edf7;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  max-width: 180px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
  font-size: 14px;

`
const CardStyle =createGlobalStyle`
.pcHeader {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 5px;
}
.pcImgContainer {
  position: relative;
  overflow: hidden;
}
.pcImg {
  width: 100%;
  height: 100%;
}

.pcPrice {
  padding: 0px 15px;
  color: rgb(11, 107, 16);
}

`
export default function Product() {
  return (
    <>
        <CardStyle/>
        <ProductCard>
            <div className="pcHeader">
                <PICon >
                    <i className="fa-solid fa-heart"></i>
                </PICon>  
                <PICon >
                    <i className="fa-solid fa-cart-plus"></i>
                </PICon>  
                <PICon >
                    <i className="fa-solid fa-shuffle"></i>
                </PICon>
            </div>
            <div className="pcImgContaier">
                <img src="./—Pngtree—wireless headphones blue_4347448.png" className="pcImg"  alt=""/>
            </div>
            <Flex alignItems ="flex-start" jusfityContent ="space-between" >
                <div>
                    <Font fs='12px' lh ="12px">
                        Beats headphone
                    </Font>
                    <TextSm>
                        solo2 stn 019 Bluthooth
                    </TextSm>
                    <Flex justifyContent="flex-start">
                        <Dot color ="black"/>
                        <Dot color ="rgb(233, 7, 7)"/>
                        <Dot color ="rgb(0, 26, 255)"/>
                    </Flex> 
                </div>
                <span className="pcPrice">
                    399 $
                </span>
            </Flex>
        </ProductCard>
    </>
  )
}
