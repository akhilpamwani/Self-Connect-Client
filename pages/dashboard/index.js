import React from 'react'


import Link from 'next/link';
import { Template } from '../../Dashboard/Template/Template';
import { Seo } from '../../Components/Seo/Seo';
import { Footer } from '../../Components/Footer/Footer';
const index = () => {
  return (
    <>
    <Seo title={"Dashboard"}></Seo>
    <Template 
    heading={"Dashboard"}
   hfirstone={"Share the Clipboard"}
   hsecondone={"Copy to the Clipboard"}
   linkone={"dashboard/clipboard"}
   linktwo={"dashboard/clipboard/copy/"}
    />   
      

    <Footer/>
    
    
    </>
  )
}

export default index