import React from 'react'

const FaildTask = ({data}) => {
  return (
    <div className='h-52 w-72 shrink-0 rounded-xl bg-red-50 p-4 flex flex-col justify-between border border-red-200 shadow-sm hover:shadow-md transition-all duration-200'>

      <div className='flex justify-between items-center'>
        <h3 className='font-semibold text-sm px-2 py-1 rounded border border-red-300 bg-red-100 text-red-800'>
          {data.category}
        </h3>
        <h4 className='text-sm font-medium px-2 py-1 rounded border border-red-300 bg-red-100 text-red-800'>
          {data.taskDate}
        </h4>
      </div>

      <div className='text-center mt-2'>
        <h3 className='font-bold text-lg text-red-900'>{data.taskTitle}</h3>
        <p className='text-sm mt-1 text-red-700'>{data.taskDescription}</p>
      </div>

      <div className='flex justify-between gap-2 mt-3'>
        <button
          type="submit"
          className="bg-red-600 cursor-pointer text-sm text-white py-1 rounded-md w-full hover:bg-red-700 transition">
          Failed Task
        </button>
      </div>

    </div>
  )
}

export default FaildTask