import React from 'react'
import Image from 'next/image'
import  Send  from "../../../Components/assets/img/send.png";
import  CopyImg  from "../../../Components/assets/img/copy.png";
import { NavBar } from '../../../Components/Dashboard/NavBar/NavBar';
import { Footer } from '../../../Components/Footer/Footer';

 const paste = ({data}) => {
  return (
    <>
    <NavBar></NavBar>
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Multi Universe Clipboard</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">The Multi-Universe Clipboard is designed to help the user to copy text from one device to another.</p>
    </div>
    <div class="flex flex-wrap -m-4 text-center">
      <div class="p-4 md:w-1/2 sm:w-1/2 w-full">
        <div class="border-2 border-gray-200 justify-center flex flex-col m-auto px-4 py-6 rounded-lg">
          <Image src={Send} width={100} className="justify-center text-center m-auto"></Image>
          <h2 class="title-font font-medium text-3xl text-gray-900">Share the Clipboard</h2>
         
        </div>
      </div>
      <div class="p-4 md:w-1/2 sm:w-1/2 w-full">
      <div class="border-2 border-gray-200 justify-center flex flex-col m-auto px-4 py-6 rounded-lg">
          <Image src={CopyImg} width={100} className="justify-center text-center m-auto"></Image>
          <h2 class="title-font font-medium text-3xl text-gray-900">Copy to the Clipboard</h2>

          
        </div>
      </div>
      </div>
      </div></section>
      <Footer></Footer>
      
    </>
  )
}

export const getServerSideProps= async()=> {
    
 


  const res = await fetch(process.env.NEXT_PUBLIC_GETCLIPBOARD_API_URL)
  const  data= await res.json();
  return {
    props: {
data:data
    }
    }
   
}

export default paste