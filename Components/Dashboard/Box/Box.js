import React from 'react'
import Image from 'next/image';
import logo from "../../assets/img/logo.png";
import Link from 'next/link';
export const Box = () => {
  return (
    
    <>
    <div className='flex justify-center m-auto items-center'>
        <Image src={logo} width={250} ></Image>
        </div>
    
    <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4">
        <div class="p-4 lg:w-1/2">
          <div class="h-full bg-white shadow-lg shadow-blue-500  px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">

            <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 ">Multi Universe Clipboard</h1>
            <p class="leading-relaxed mb-3">The Multi-Universe Clipboard is designed to help the user to copy text from one device to another.</p>
            <button class="flex mx-auto mt-6 text-white bg-blue-500 border-0 py-2 px-5 focus:outline-none hover:bg-transparent hover:border-2 hover:text-blue-500 hover:border-blue-500 rounded"><Link href={"/dashboard/copy"}>Explore</Link></button>
      
            <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
              
             
           
            </div>
          </div>
        </div>
   
        <div class="p-4 lg:w-1/2">
          <div class="h-full bg-white shadow-lg shadow-blue-500  px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">

            <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 ">Parimal Share</h1>
            <p class="leading-relaxed mb-3">The Paimal Share is designed to help the user to send files files one device to another.</p>
            <button class="flex mx-auto mt-6 text-white bg-blue-500 border-0 py-2 px-5 focus:outline-none hover:bg-transparent hover:border-2 hover:text-blue-500 hover:border-blue-500 rounded">Explore</button>
      
            <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
              
             
           
            </div>
          </div>
        </div>
       
      </div>
    </div>
  </section></>
  )
}
