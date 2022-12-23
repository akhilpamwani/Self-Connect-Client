
import logo from '../../Components/assets/img/logo.png'
import Image from 'next/image'
import  Link  from 'next/link';


export const NavPc = () => {
  
  return (
    <> 
<nav className="flex z-50   bg-white text-black  flex-row justify-center   w-full shadow-lg  NavBar  shadow-blue-500      bg-inherit" >
            <div className='text-center  my-auto ml-2  justify-center flex'>
            <Link href='/dashboard'><Image   alt="menu" src={logo} width={150} className='list-none text-center -mt-8 items-center m-auto justify-center flex font-semibold  font-serif text-inherit text-lg'/></Link>
            </div>
            <ul className= "flex flex-row justify-center m-auto my-auto z-50 Nav-ul">
                <li className=" list-none mx-2 hover:bg-gradient-to-r hover:from-blue-400 HanKen font-semibold p-1.5 hover:to-blue-500 cursor-pointer  hover:rounded hover:text-white Ramabhadra" ><Link href='/dashboard/copy'        >Multi-Unverse Clipboard</Link></li>
                <li className=" list-none mx-2 hover:bg-gradient-to-r hover:from-blue-400 HanKen font-semibold p-1.5 hover:to-blue-500 cursor-pointer  hover:rounded hover:text-white Ramabhadra" ><Link href='/dashboard/copy/paste'   >Parimal Share</Link></li>
                  </ul>
                
             

           
        </nav>
    </>
  )
}
