import React,{useState} from 'react'

import { Footer } from '../../Footer/Footer';
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Template } from '../../../pages/dashboard/Template';


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
    <Template/>
<div className='flex flex-row '>


<input type="text" id="text"  
placeholder='Paste your copied text '
 name="text"
 value={copiedmaal}
        onChange={(e) => setCopiedMaal(e.target.value)}
       
className="w-3/4 text-center justify-center m-auto  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
<button 
onClick={handleSubmit}
className="flex mx-auto mt-0 text-white bg-blue-500 border-0 py-2 px-5 focus:outline-none hover:bg-transparent hover:border-2 hover:text-blue-500 hover:border-blue-500 rounded"> Share </button>
</div>
    
    <Footer></Footer>
    </>
  )
}
