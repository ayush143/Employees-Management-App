import React from 'react'
import  AcceptTask  from './AcceptTask'
import CompletedTask from './CompleteTask'
import FaildTask from './FaildTask'
import NewTask from './NewTask' 


 const TaskList = ({data}) => {
  
  return (
 
 
    <div className='flex gap-6 mt-10 px-2 py-3 w-full overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100'>
      {data.tasks.map((e ,idx)=>{
        if(e.active){
        return  <AcceptTask key={idx} data={e} />
        }
        if(e.completed){
        return  <CompletedTask key={idx} data={e} />
        }
         if(e.newTask){
        return  <NewTask key={idx} data={e}/>
        
        }
         if(e.failed){
        return  <FaildTask key={idx} data={e} />
        
        }
        
        
      })}
    </div>

  )
}
export default TaskList