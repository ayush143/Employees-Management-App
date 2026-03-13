import React, { useState } from 'react'
import { employees } from '../../utils/LocalStorage'

 const CreateTask = ({OnTaskAdded}) => {
    const [Task, setTask] = useState('')
    const [Description, setDescription] = useState('')
    const [AsignTo, setAsignTo] = useState('')
    const [Category, setCategory] = useState('')
    const [Date, setDate] = useState('')

    const [CreateTask, setCreateTask] = useState({})
 
     const SubmitHandler= (e)=>{
         e.preventDefault();
const newTask = {
  taskTitle: Task,
  taskDescription: Description,
  category: Category,
  AsignTo: AsignTo,
  taskDate: Date,
  active: false,
  completed: false,
  newTask: true,
  failed: false
};
    setCreateTask(newTask)
      
const data = JSON.parse(localStorage.getItem("employees"));

  data.forEach(function(e){
   if(AsignTo==e.firstName){
      e.tasks.push(newTask)
      e.taskNumbers.newTask= e.taskNumbers.newTask+1;
   }
  })
  OnTaskAdded(data);
  
  localStorage.setItem("employees", JSON.stringify(data));

  console.log(data)

    setTask('')
    setDescription('')
    setAsignTo('')
    setCategory('')
    setDate('')
 }

  return (

    <div id='aby' className='overflow-y-scroll w-full rounded-2xl mt-7 bg-[#030d25] text-white px-6 lg:px-16 py-10 flex flex-col gap-4'>

   <div className='w-full bg-[#1c1c1c] rounded-xl p-8 border border-gray-700 shadow-lg flex-1'>

   <form className='grid grid-cols-1 lg:grid-cols-2 gap-10 h-full'
   onSubmit={(e)=>{
   SubmitHandler(e)}}>

      
       <h1 className='font-bold col-span-1 lg:col-span-2 text-center text-3xl mb-4'>Create Task</h1>

       <div className='flex flex-col gap-4'>
       <label className='text-gray-300 text-sm'>Task Title</label>
       <input type="text"
       placeholder='Make a Ui Design'
        className='h-11 w-full bg-[#111] border border-gray-600 rounded-md px-4 focus:border-green-400 outline-none transition'
         value={Task}
         onChange={(e)=>{
            setTask(e.target.value)
         }}/>

        <label className='text-gray-300 text-sm'>Date</label>
       <input type="Date"
        className='h-11 w-full bg-[#111] border border-gray-600 rounded-md px-4 focus:border-green-400 outline-none transition'
       value={Date}
         onChange={(e)=>{
            setDate(e.target.value)}
         }/>

        <label className='text-gray-300 text-sm'>Asign To</label>
       <input type="text"
       placeholder="employee name"
       className='h-11 w-full bg-[#111] border border-gray-600 rounded-md px-4 focus:border-green-400 outline-none transition'
        value={AsignTo}
         onChange={(e)=>{
            setAsignTo(e.target.value)
         }
        }
       />
        <label className='text-gray-300 text-sm'>Category</label>
       <input type="text"
       placeholder="design, dev, etc"
      className="h-11 w-full bg-[#111] border border-gray-600 rounded-md px-4 focus:border-green-400 outline-none transition"
       value={Category}
         onChange={(e)=>{
            setCategory(e.target.value)
         }
        } />
        </div>

        <div className='flex flex-col gap-4'>
        <label className='text-gray-300 text-sm'>Description</label>
       <textarea
       placeholder="Detailed Description of Task"
       className='h-48 lg:h-full w-full bg-[#111] border border-gray-600 rounded-md p-4 focus:border-green-400 outline-none transition resize-none'
       value={Description}
         onChange={(e)=>{
            setDescription(e.target.value)}
         }  />

        <button
                type="submit"
                className="bg-green-500 cursor-pointer h-12 w-full text-white rounded-md hover:bg-green-600 transition font-semibold mt-4">
               Create Task </button>
        </div>
       </form>

        </div>
        
      
    </div>
  )
}
export default CreateTask
