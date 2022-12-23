import React,{useState} from 'react'
import Link from 'next/link';
import Image from 'next/image'
import menu from '../assets/img/menu.png';
import logo from '../assets/img/logo.png';
export const NavMb = () => {
    const [state, setstate] = useState(true) 
  return (
    <>
    <nav className={state ? "flex flex-row justify-center lg:hidden sm:hidden top-0  md:hidden  fixed w-full shadow-lg    shadow-blue-500 z-50  h-28   bg-white" : "flex top-0 lg:hidden sm:hidden  md:hidden  fixed  flex-row justify-center   w-full shadow-lg    shadow-blue-500 z-50 h-82 bg-white "}>
        <div className= {state ?'text-center Nav-Logo-Div  ml-2   justify-center flex':"text-center  ml-5  mt-0   justify-center flex"}>
        <Link href='/'> <Image alt="menu"  src={logo} width={150} className='list-none -mt-16 text-center items-center m-auto justify-center flex font-semibold  font-serif text-inherit Nav-Logo text-md'/></Link>
            </div>
        <ul className={state ? "hidden justify-center m-auto  my-5 z-50" : "flex flex-col justify-center  mt-32 m-auto  my-5 z-50"} >
                <li className=" list-none mx-2 hover:bg-gradient-to-r hover:from-blue-400  p-1.5 hover:to-blue-500 cursor-pointer  hover:rounded hover:text-white font-medium Lobster" onClick={()=>setstate(!state)}  ><Link href='/'>Home</Link></li>
                <li className=" list-none mx-2 hover:bg-gradient-to-r hover:from-blue-400  p-1.5 hover:to-blue-500 cursor-pointer  hover:rounded hover:text-white font-medium Lobster" onClick={()=>setstate(!state)} ><Link href='#about'>About</Link></li>
                <li className=" list-none mx-2 hover:bg-gradient-to-r hover:from-blue-400  p-1.5 hover:to-blue-500 cursor-pointer  hover:rounded hover:text-white font-medium Lobster" onClick={()=>setstate(!state)} ><Link href='#features'>Features</Link></li>
                <li className=" list-none mx-2 hover:bg-gradient-to-r hover:from-blue-400  p-1.5 hover:to-blue-500 cursor-pointer  hover:rounded hover:text-white font-medium Lobster" onClick={()=>setstate(!state)} ><Link href='#contact'>Contact</Link></li>
                <button className='w-20 h-10 rounded bg-blue-500 text-white mb-2 justify-center m-auto
                 mx-2'><Link href={'/sigin'}>Sigin</Link></button>
                <button className='w-20 h-10 rounded bg-blue-500 text-white mb-2 justify-center m-auto
                 mx-2'><Link href={'/login'}>Login</Link></button>
            </ul>
                
            
                  <div className="w-12 h12 mt-0  mr-5 unset">
            <Image   src={menu} alt='menu' width={48} height={48}  onClick={()=>setstate(!state)}  className="h-12 w-12 m-1 image flex  justify-end content-end items-end mt-5"></Image> 
            </div>  </nav></>
  )
}
