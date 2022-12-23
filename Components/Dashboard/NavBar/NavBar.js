import React,{useState} from 'react'
import logo from "../../assets/img/logo.png";
import menu from "../../assets/img/menu.png";
import Link from 'next/link';
import Image from 'next/image';
export const NavBar = () => {
    const [state, setstate] = useState(true) 
  return (
    <>
    <div className={state? 'flex fixed bg-white text-black flex-col top-0 z-50 h-screen w-20 shadow-blue-500 shadow-lg':'flex fixed bg-white text-black flex-col top-0 z-50 h-screen w-60 shadow-blue-500 shadow-lg'}>
    <div className='text-center  my-auto ml-2  justify-center flex'>
    <Image src={menu} alt='menu' width={48} height={48}  onClick={()=>setstate(!state)}  className={state?"h-12 w-12  flex items-start justify-end content-end absolute top-11 mt-0":"h-12 w-12  flex items-start justify-end content-end  mt-0"}></Image> 
            <Link href='/'><Image src={logo} width={150} className={state?"hidden":'list-none text-center -mt-8 items-center m-auto justify-center flex font-semibold  font-serif text-inherit text-lg'}/></Link>
            </div>
            <ul className= {state?"hidden":"flex flex-col justify-center m-auto my-auto z-50 Nav-ul"}>
                <li className=" list-none mx-2 hover:bg-gradient-to-r hover:from-blue-400 HanKen font-semibold p-1.5 hover:to-blue-500 cursor-pointer  hover:rounded hover:text-white Ramabhadra" ><Link href='/'        >Multi-Universe Clipboard</Link></li>
                <li className=" list-none mx-2 hover:bg-gradient-to-r hover:from-blue-400 HanKen font-semibold p-1.5 hover:to-blue-500 cursor-pointer  hover:rounded hover:text-white Ramabhadra" ><Link href='/#about'   >Parimal Share</Link></li>
                {/* <li className=" list-none mx-2 hover:bg-gradient-to-r hover:from-blue-400 HanKen font-semibold p-1.5 hover:to-blue-500 cursor-pointer  hover:rounded hover:text-white Ramabhadra" ><Link href='/#features'   >Features</Link></li> */}
                {/* <li className=" list-none mx-2 hover:bg-gradient-to-r hover:from-blue-400 HanKen font-semibold p-1.5 hover:to-blue-500 cursor-pointer  hover:rounded hover:text-white Ramabhadra" ><Link href='/#contact' >Contact</Link></li> */}
            </ul>
                
    </div>
    
    
    
    </>
  )
}
