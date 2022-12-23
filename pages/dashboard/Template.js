import React from 'react'
import Image from 'next/image'
import  Send  from "../../Components/assets/img/send.png";
import  CopyImg  from "../../Components/assets/img/copy.png";
import { NavBar } from '../../Components/Dashboard/NavBar/NavBar';
import Link from 'next/link';
export const Template = () => {
  return (
    <>
    <NavBar></NavBar>
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Multi Universe Clipboard</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">The Multi-Universe Clipboard is designed to help the user to copy text from one device to another.</p>
    </div>
    <div className="flex flex-wrap -m-4 text-center">
      <div className="p-4 md:w-1/2 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 justify-center flex flex-col m-auto px-4 py-6 rounded-lg">
        <Link href= {'/dashboard/Copy'}><Image src={Send} alt="img" width={100} className="justify-center text-center m-auto"/></Link>
          <h2 className="title-font font-medium text-3xl text-gray-900">Share the Clipboard</h2>
         
        </div>
      </div>
      <div className="p-4 md:w-1/2 sm:w-1/2 w-full">
      <div className="border-2 border-gray-200 justify-center flex flex-col m-auto px-4 py-6 rounded-lg">
          <Link href= {'/dashboard/Copy/Paste'}><Image alt="img" src={CopyImg} width={100} className="justify-center text-center m-auto"/></Link>
          <h2 className="title-font font-medium text-3xl text-gray-900">Copy to the Clipboard</h2>

          
        </div>
      </div>
      
      
    </div>
  </div>
</section>
    
    </>
  )
}
