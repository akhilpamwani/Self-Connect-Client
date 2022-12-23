import React,{useState} from 'react'

import { Footer } from '../../../../Components/Footer/Footer';
import { Template } from '../../../../Dashboard/Template/Template';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Seo } from '../../../../Components/Seo/Seo';

const index = ({data}) => {
  const [state, setstate] = useState("")
 
    const handleCopy=(e)=>{
      e.preventDefault();
      setstate(true)
       
    }
 

  return (
    <>
    <Seo title={"Copy Clipboard"}/>
    <Template 
    heading={"Multi Universe Clipboard"}
    para={"The Multi-Universe Clipboard is designed to help the user to copy text from one device to another."}
   hfirstone={"Share the Clipboard"}
   hsecondone={"Copy to the Clipboard"}
   linkone={"/dashboard/clipboard"}
   linktwo={"/dashboard/clipboard/copy/"}
    />
    <div className='flex flex-row w-2/2 justify-center text-center'>

      <div className='flex flex-col text-black  w-4/6 text-center'>
      
      { data.map((val,key)=>{
               return(
                  <div className='border-2  mt-2 item-center  border-gray-300' key={key} >
                  <p value={setstate} onChange={(e)=>setstate(e.target.value)} className='text-black'>{val.copiedmaal}</p>

  <div  className='flex justify-end w-2/2 ml-5  flex-row' key={val._id}>
  <CopyToClipboard text={val.copiedmaal}
          onCopy={() => setstate({copied: true})}>
<button onClick={handleCopy} className="flex  flex-row text-white bg-blue-500  py-2 px-5 focus:outline-none hover:bg-transparent border-2 hover:border-2 border-blue-500 hover:text-blue-500 hover:border-blue-500 rounded"> Copy </button>
 </CopyToClipboard> </div>
</div>
              )})} 

 
<div>
</div>
</div>

      </div>
      <Footer/>
    </>
  )
}

export const getServerSideProps= async ()=> {
    
 


  const res = await fetch(process.env.NEXT_PUBLIC_GETCLIPBOARD_API_URL);
  const  data= await res.json();
  return {
    props: {
data
    }
    }
}

export default index