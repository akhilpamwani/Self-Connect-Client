import React from "react";
import Link from 'next/link'
import Image from 'next/image'
import logo from '../assets/img/logo.png'
export const Footer = () => {
    return <>
        <div className="  flex flex-col footer w-full   h-60   text-inherit bg-inherit content-center shadow-blue-400  shadow-inner justify-center  items-center text-center relative top-44 mt-20 ">
            
            <Link href={"/"} passHref><Image src={logo} width={200}  height={200} /></Link>
            <p>Created & Managed By Aryan Pamwni</p>
    </div>
    
    
    </>
};


