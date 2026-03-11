import React, { useState } from 'react'
import ManageAllTask from '../Others/ManageAllTask'
import CreateTask from '../Others/CreateTask'

 const AdminDashbord = ({authData}) => {
const logout=()=>{
 localStorage.setItem('loggedInUser','')
 window.location.reload()
}

  return (
   <div className=' min-h-screen relative overflow-y-scroll w-full bg-[#0b0b0b] text-white px-6 lg:px-12 py-8 flex flex-col'>

  <CreateTask/>
  <ManageAllTask authData={authData}/>
    <button 
          className="bg-red-500 absolute top-40 right-42 cursor-pointer h-10 w-24 text-center text-white py-2 rounded-lg font-semibold shadow-md hover:bg-red-600 hover:scale-105 hover:shadow-xl transition-all duration-300"
          onClick={logout}
          type='submit'>Log Out</button>

  </div>
  )
 }
export default AdminDashbord