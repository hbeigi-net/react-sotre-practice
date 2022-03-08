import React from 'react'
import FormatQuoteSharpIcon from '@mui/icons-material/FormatQuoteSharp';
export default function TestimonialCarouselItem() {
  return (
    <>
    <div style ={{display : 'flex' , maxWidth : "800px" , margin : "10px auto" , fontSize : "14px" , backgroundColor : "rgb(242, 238, 255)" , padding : "1rem"}}>
        <FormatQuoteSharpIcon/>
        <p style={{margin : "10px"}}>
                 My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.  I look forward to shopping on your site in the future and would highly recommend it.
                 <p style={{textAlign :"end" , fontSize : "13px", marginTop : "10px"}}>
                    -Tama Brown
                 </p>
        </p>

    </div>
    </>
  )
}
