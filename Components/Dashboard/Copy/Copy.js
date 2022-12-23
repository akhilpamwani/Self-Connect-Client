import React,{useState} from 'react'
import Image from 'next/image'
import  Send  from "../../assets/img/send.png";
import  CopyImg  from "../../assets/img/copy.png";
import { NavBar } from '../NavBar/NavBar';
import { Footer } from '../../Footer/Footer';
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Copy = () => {
  toast.configure()
  const [copiedmaal, setCopiedMaal] = useState("")
  const handleSubmit=  (e)=>{
    e.preventDefault();

    // console.log("url", process.env.NEXT_PUBLIC_CONTACT_API_URL );
   axios.post(process.env.NEXT_PUBLIC_CLIPBOARD_API_URL,
    {copiedmaal:copiedmaal })
      .then(async () => {

        toast.success('Clipboard Shared', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
    
      }).catch(async () => {
      // console.log(" Contact data has not been saved Successfully ");
     toast.error("Internal Server Error", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    })
  }

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
  </div>
</section>
<div className='flex flex-row '>


<input type="text" id="text"  
placeholder='Paste your copied text '
 name="text"
 value={copiedmaal}
        onChange={(e) => setCopiedMaal(e.target.value)}
       
class="w-3/4 text-center justify-center m-auto  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
<button 
onClick={handleSubmit}
class="flex mx-auto mt-0 text-white bg-blue-500 border-0 py-2 px-5 focus:outline-none hover:bg-transparent hover:border-2 hover:text-blue-500 hover:border-blue-500 rounded"> Share </button>
</div>
    
    <Footer></Footer>
    </>
  )
}
