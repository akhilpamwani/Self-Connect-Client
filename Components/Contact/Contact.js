import React,{useState} from 'react'



import 'react-toastify/dist/ReactToastify.css';
import {  toast } from 'react-toastify';

import axios from 'axios';
export const Contact = () => {
  toast.configure()

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSuject] =useState("");
  const [detail,setDetail]=useState("")
 

  
  const handleSubmit=  (e)=>{
    e.preventDefault();

    // console.log("url", process.env.NEXT_PUBLIC_CONTACT_API_URL );
   axios.post(process.env.NEXT_PUBLIC_CONTACT_API_URL,
    {name:name,email:email,subject:subject,detail:detail })
      .then(async () => {

        toast.success('Contact data has been saved Successfully', {
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
     toast.error(" Contact data has not been saved Successfully ", {
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
      
              
          <div className="flex flex-col m-auto justify-center items-center w-9/12 mt-10 content-center   border-2 border-blue-500 rounded-md" id="contact" >
              <label htmlFor="Name" className="text-sm text-center  my-5 font-semibold font-sans" >Name</label>
        <input type='text' name='name' className='bg-inherit outline-none  border-2 rounded-md border-blue-500 w-80 text-center Form-input' placeholder='Enter Your Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        
        />
              <label htmlFor="Email" className="text-sm text-center  my-5 font-semibold font-sans" >Email</label>
        <input type='email' name='email' className='bg-inherit outline-none  border-2 rounded-md border-blue-500 w-80 text-center Form-input' placeholder='Enter Your Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        />
              <label htmlFor="Subject" className="text-sm text-center  my-5 font-semibold font-sans" >Subject</label>
        <input type='text' name='subject' className='bg-inherit outline-none  border-2 rounded-md border-blue-500 w-80 text-center Form-input' placeholder='Enter Your Subject'
        value={subject}
        onChange={(e) => setSuject(e.target.value)}
        required
        />
              <label htmlFor="Detail" className="text-sm text-center  my-5 font-semibold font-sans">Explain Your Subject in detail</label>
        <textarea cols="30"  name="detail" className='bg-inherit   outline-none border-2 rounded-md border-blue-500 w-80 text-center Form-input' rows="10" placeholder='Enter Your Subject and explain it in detail '
        value={detail}
        onChange={(e) => setDetail(e.target.value)}
        required
        
        ></textarea>
            <div className='inherit my-5'>
            <button onClick={handleSubmit} className='border-blue-500 border-2  m-auto border-solid hover:contrast-150 left-0 right-0  relative top-0 hover:bg-blue-500 hover:text-white cursor-pointer hover:border-0 text-blue-500 w-32 h-10 rounded-xl justify-center block mx-2 font-bold'> Send</button>
              </div>
          </div> 
      
      </>
  )
}
