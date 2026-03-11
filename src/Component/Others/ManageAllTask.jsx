import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const ManageAllTask = ({authData}) => {

  console.log(authData)

  return (
    <div id='abx' className='overflow-y-scroll w-full rounded-2xl mt-7 bg-[#0f172a] text-white px-6 lg:px-16 py-10 flex flex-col gap-4'>

     <h1 className='grid grid-cols-6 h-14 rounded-xl px-6 font-semibold text-lg items-center bg-orange-500 shadow-lg'>
      <span>ID</span>
      <span>Name</span>
      <span>Active Task</span>
      <span>New Task</span>
      <span>Completed</span>
      <span>Failed</span>
     </h1>

      <div className='grid grid-cols-6 h-16 rounded-xl px-6 font-semibold items-center bg-[#1e293b] hover:bg-[#334155] transition-all duration-300 shadow-md'>
      <div className='text-lg'>{authData.employees[0].id}</div>
      <div className='text-lg'>{authData.employees[0].firstName}</div>
      <div className='text-lg text-yellow-400'>{authData.employees[0].taskNumbers.active}</div>
      <div className='text-lg text-blue-400'>{authData.employees[0].taskNumbers.newTask}</div>
      <div className='text-lg text-green-400'>{authData.employees[0].taskNumbers.completed}</div>
      <div className='text-lg text-red-400'>{authData.employees[0].taskNumbers.failed}</div>
      </div>


       <div className='grid grid-cols-6 h-16 rounded-xl px-6 font-semibold items-center bg-[#1e293b] hover:bg-[#334155] transition-all duration-300 shadow-md'>
      <div className='text-lg'>{authData.employees[1].id}</div>
      <div className='text-lg'>{authData.employees[1].firstName}</div>
      <div className='text-lg text-yellow-400'>{authData.employees[1].taskNumbers.active}</div>
      <div className='text-lg text-blue-400'>{authData.employees[1].taskNumbers.newTask}</div>
      <div className='text-lg text-green-400'>{authData.employees[1].taskNumbers.completed}</div>
      <div className='text-lg text-red-400'>{authData.employees[1].taskNumbers.failed}</div>
      </div>


       <div className='grid grid-cols-6 h-16 rounded-xl px-6 font-semibold items-center bg-[#1e293b] hover:bg-[#334155] transition-all duration-300 shadow-md'>
      <div className='text-lg'>{authData.employees[2].id}</div>
      <div className='text-lg'>{authData.employees[2].firstName}</div>
      <div className='text-lg text-yellow-400'>{authData.employees[2].taskNumbers.active}</div>
      <div className='text-lg text-blue-400'>{authData.employees[2].taskNumbers.newTask}</div>
      <div className='text-lg text-green-400'>{authData.employees[2].taskNumbers.completed}</div>
      <div className='text-lg text-red-400'>{authData.employees[2].taskNumbers.failed}</div>
      </div>


       <div className='grid grid-cols-6 h-16 rounded-xl px-6 font-semibold items-center bg-[#1e293b] hover:bg-[#334155] transition-all duration-300 shadow-md'>
      <div className='text-lg'>{authData.employees[3].id}</div>
      <div className='text-lg'>{authData.employees[3].firstName}</div>
      <div className='text-lg text-yellow-400'>{authData.employees[3].taskNumbers.active}</div>
      <div className='text-lg text-blue-400'>{authData.employees[3].taskNumbers.newTask}</div>
      <div className='text-lg text-green-400'>{authData.employees[3].taskNumbers.completed}</div>
      <div className='text-lg text-red-400'>{authData.employees[3].taskNumbers.failed}</div>
      </div>


       <div className='grid grid-cols-6 h-16 rounded-xl px-6 font-semibold items-center bg-[#1e293b] hover:bg-[#334155] transition-all duration-300 shadow-md'>
      <div className='text-lg'>{authData.employees[4].id}</div>
      <div className='text-lg'>{authData.employees[4].firstName}</div>
      <div className='text-lg text-yellow-400'>{authData.employees[4].taskNumbers.active}</div>
      <div className='text-lg text-blue-400'>{authData.employees[4].taskNumbers.newTask}</div>
      <div className='text-lg text-green-400'>{authData.employees[4].taskNumbers.completed}</div>
      <div className='text-lg text-red-400'>{authData.employees[4].taskNumbers.failed}</div>
      </div>
  
    </div>
  )
}

export default ManageAllTask