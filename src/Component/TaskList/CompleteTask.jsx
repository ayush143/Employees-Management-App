import React from 'react'

const CompletedTask = ({data}) => {
  return (
    <div className='h-52 w-72 shrink-0 rounded-xl bg-gray-800 p-4 flex flex-col justify-between border border-gray-700 shadow-sm hover:shadow-md transition-all duration-200'>

      <div className='flex justify-between items-center'>
        <h3 className='font-semibold text-sm px-2 py-1 rounded border border-gray-600 bg-gray-700 text-gray-100'>
          {data.category}
        </h3>
        <h4 className='text-sm font-medium px-2 py-1 rounded border border-gray-600 bg-gray-700 text-gray-100'>
          {data.taskDate}
        </h4>
      </div>

      <div className='text-center mt-2'>
        <h3 className='font-bold text-lg text-white'>{data.taskTitle}</h3>
        <p className='text-sm mt-1 text-gray-300'>{data.taskDescription}</p>
      </div>

      <div className='flex justify-between gap-2 mt-3'>
        <button
          type="submit"
          className="bg-green-600 cursor-pointer text-sm text-white py-1 rounded-md w-full hover:bg-green-700 transition">
          Completed
        </button>
      </div>

    </div>
  )
}

export default CompletedTask