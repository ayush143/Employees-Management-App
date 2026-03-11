import React from 'react'

 const TaskListNumbers = ({data}) => {
  return (
    <div className='flex justify-between mt-10 flex-wrap gap-5'>
      <div className='rounded-xl h-28 w-[33%] p-5 bg-white border border-gray-200 shadow-sm hover:shadow-md transition'>
         <h2 className='text-3xl font-semibold text-gray-800'>{data?.taskNumbers.newTask}</h2>
         <h3 className='font-medium text-gray-500'>newTask</h3>
      </div>

      <div className='rounded-xl h-28 w-[33%] p-5 bg-white border border-gray-200 shadow-sm hover:shadow-md transition'>
         <h2 className='text-3xl font-semibold text-gray-800'>{data?.taskNumbers.completed}</h2>
         <h3 className='font-medium text-gray-500'>completed Task</h3>
      </div>

      <div className='rounded-xl h-28 w-[33%] p-5 bg-white border border-gray-200 shadow-sm hover:shadow-md transition'>
         <h2 className='text-3xl font-semibold text-gray-800'>{data?.taskNumbers.failed}</h2>
         <h3 className='font-medium text-gray-500'>failed Task</h3>
      </div>

      <div className='rounded-xl h-28 w-[33%] p-5 bg-white border border-gray-200 shadow-sm hover:shadow-md transition'>
         <h2 className='text-3xl font-semibold text-gray-800'>{data?.taskNumbers.active}</h2>
         <h3 className='font-medium text-gray-500'>Accept Task</h3>
      </div>
    </div>
  )
}
export default TaskListNumbers