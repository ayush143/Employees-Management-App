import { createContext, useContext, useEffect, useState } from "react"
import { admin, employees, getLocalStorage, setLocalStorage } from "../utils/LocalStorage"

export const AuthContext = createContext()

 const AuthProvider = ({children}) => {
  
const [UserData, setUserData] = useState({employees:[]})

  useEffect(() => {
    setLocalStorage()
    const {employees }= getLocalStorage()
    setUserData({employees})
  
  }, [])
  
  return (
   <AuthContext.Provider value={[UserData,setUserData]}>
      {children}
   </AuthContext.Provider>
  )
}
export default AuthProvider