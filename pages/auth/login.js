import React from 'react'
import { Footer } from '../../Components/Footer/Footer'
import  Login  from '../../Components/Login/Login'
import { NavBar } from '../../Components/NavBar/NavBar'

 const login = () => {
  return (
    <>
    <NavBar/>
    <Login/>
    <Footer/>
    </>
  )
}
export default login