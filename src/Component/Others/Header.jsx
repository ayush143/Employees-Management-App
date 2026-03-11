import React, { useState } from 'react'
import Login from '../Auth/Login'

 const Header = ({data}) => {
const UserName = data ? data.firstName : "Admin"
const logout=()=>{
 localStorage.setItem('loggedInUser','')
 window.location.reload()
}
  return (
    <div className='h-24 w-full px-8  bg-gray-800 justify-between items-center flex rounded-2xl shadow-lg'>
        <h1><span className='text-2xl text-white font-medium'>Hello,</span> <br />  
        <span className='font-extrabold text-3xl text-white tracking-wide'>{UserName}👋</span> </h1>

        <button 
          className="bg-red-500 cursor-pointer h-10 w-24 text-center text-white py-2 rounded-lg font-semibold shadow-md hover:bg-red-600 hover:scale-105 hover:shadow-xl transition-all duration-300"
          onClick={logout}
          type='submit'>Log Out</button>
    </div>
  )
}
export default Header