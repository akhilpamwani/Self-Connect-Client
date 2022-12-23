

import { About } from "../Components/About/About";
import { Hero } from "../Components/Home/Hero";
import { NavBar } from "../Components/NavBar/NavBar";

import logo from '../Components/assets/img/logo.png';

import { Contact } from "../Components/Contact/Contact";
import { Hr } from "../Components/HrComponent/Hr";
import { Footer } from "../Components/Footer/Footer";
import { Feature } from "../Components/Feature/Feature";
// import { NavMb } from "../Components/NavBar/NavMb";

export default function Home() {
  return (
    <>
  
<NavBar/>
  <Hero/>
<Hr topheading={"About"}/>
  <About 
  ID={"about"}
  heading={"What is Self Connect ? "}
  listone={"1. Self Connect is a platform that allows you to connect your devices to each other"}
  listwo={"2. It provides multiple features Like :- Multi-Universe Clipboard, Parimal Share & many more. "}
 Img={logo}
 />
 <Hr topheading={"Features"}/>

 <Feature
  ID={"features"}
  heading={"Multi-Universe Clipboard"}
listone={"1. The Multi-Universe Clipboard is designed to help the user to copy text from one device to another ."}
 video={'https://www.youtube.com/embed/QE8lcQK5DXM'}
 />
 
 <Feature
 ID={"features"}
 heading={" Parimal Share "}
  listone={"1. The Paimal Share is designed to help the user to send files files one device to another ."}
  video={"https://www.youtube.com/embed/neCRyBfNnO0"}

 />
 <Hr topheading={"Contact"}/>
<Contact/>
<Footer/>

    </>
  )
}
