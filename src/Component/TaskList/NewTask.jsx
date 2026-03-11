import React from 'react'

  const NewTask = ({data}) => {
  console.log('heshhfj');
   
  return (
    <div className='h-52 w-72  shrink-0 rounded-6xl bg-green-50 p-4 flex flex-col justify-between border border-green-200 shadow-sm hover:shadow-md transition-all duration-200'>

      <div className='flex justify-between items-center'>
        <h3 className='font-semibold text-sm px-2 py-1 rounded border border-green-300 bg-green-100 text-green-800'>
         {data.category}</h3>
        <h4 className='text-sm font-medium px-2 py-1 rounded border border-green-300 bg-green-100 text-green-800'>
        {data.taskDate}</h4>
      </div> 
      

      <div className='text-center mt-2'>
        <h3 className='font-bold text-lg text-green-900'>{data.taskTitle}</h3>
        <p className='text-sm mt-1 text-green-700'>{data.taskDescription}</p>
      </div>

      <div className='flex justify-between gap-2 mt-3'>
        <button
          type="submit"
          className="bg-green-500 cursor-pointer text-sm text-white py-1 rounded-md w-full hover:bg-green-600 transition">
          Accept Task
        </button>
      </div>

    </div>
  )
}
export default NewTask
