import React, { useContext, useEffect, useState } from 'react'
import Login from './Component/Auth/Login'
import EmployeDashbord from './Component/Dashbord/EmployeDashbord'
import AdminDashbord from './Component/Dashbord/AdminDashbord'
import { employees, getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './Context/AuthProvider'

 const App = () => {


  const [User, setUser] = useState(null)
  const [AuthData] =useContext(AuthContext)
  const [LoggedInUserData, setLoggedInUserData] = useState(null)


useEffect(() => {
  const loggedInUser = localStorage.getItem('loggedInUser')
  if (loggedInUser) {
    const UserData= JSON.parse(loggedInUser)
      setUser(UserData.role);
      setLoggedInUserData(UserData.data)
  }
 
},[])




  const HandleLogin = (email,password)=>{
    if(email=="admin@me.com" && password==123){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }
    else if(AuthData ){
      const employee = AuthData.employees.find((e)=> email==e.email && e.password==password)
      if(employee){
         setUser('employee')
         setLoggedInUserData(employee) 
          localStorage.setItem('loggedInUser',JSON.stringify({role:'employee' , data: employee})) 

        }
    }
    else{
      alert('Invalid credintials')
    }
  }
  return (
   
    <>
   {!User?<Login HandleLogin={HandleLogin}/>:''}
    {User=='admin'? <AdminDashbord  />: (User =='employee' ?<EmployeDashbord  data={LoggedInUserData}/>:null )}
    
    </>
  )
}
export default App