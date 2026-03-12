import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const ManageAllTask = () => {
  const [authData, _] = useContext(AuthContext)


  const employeeRows = []
  if (authData && authData.employees && authData.employees.length > 0) {
    authData.employees.forEach((emp) => {
      employeeRows.push(
        <div
          key={emp.id}
          className='grid grid-cols-6 h-16 rounded-xl px-6 font-semibold items-center bg-[#1e293b] hover:bg-[#334155] transition-all duration-300 shadow-md'
        >
          <div className='text-lg'>{emp.id}</div>
          <div className='text-lg'>{emp.firstName}</div>
          <div className='text-lg text-yellow-400'>{emp.taskNumbers.active}</div>
          <div className='text-lg text-blue-400'>{emp.taskNumbers.newTask}</div>
          <div className='text-lg text-green-400'>{emp.taskNumbers.completed}</div>
          <div className='text-lg text-red-400'>{emp.taskNumbers.failed}</div>
        </div>
      )
    })
  }

  return (
    <div
      id='abx'
      className='overflow-y-scroll w-full rounded-2xl mt-7 bg-[#0f172a] text-white px-6 lg:px-16 py-10 flex flex-col gap-4'
    >
      <h1 className='grid grid-cols-6 h-14 rounded-xl px-6 font-semibold text-lg items-center bg-orange-500 shadow-lg'>
        <span>ID</span>
        <span>Name</span>
        <span>Active Task</span>
        <span>New Task</span>
        <span>Completed</span>
        <span>Failed</span>
      </h1>

      {employeeRows}
    </div>
  )
}

export default ManageAllTask