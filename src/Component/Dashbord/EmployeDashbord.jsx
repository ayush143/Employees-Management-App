import React from 'react'
import Header from '../Others/Header'
import TaskListNumbers from '../Others/TaskListNumbers'
import TaskList from '../TaskList/TaskList'


 const EmployeDashbord = ({data}) =>{

   
  return (
    <>
        <div className='p-11 bg-[#1C1C1C]  h-screen'>
            
            <Header data={data} />
            <TaskListNumbers data={data} />
            <TaskList data={data}/>
        </div>
   </>
  )
}
export default EmployeDashbord