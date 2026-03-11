import React, { useState } from 'react'

const Login = ({HandleLogin}) => {
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')

   const SubmitHandler=(e)=>{
       e.preventDefault() 
       HandleLogin(Email ,Password)
       setEmail("")
       setPassword("")
    }

  return (
    <>
     <div
     className="flex justify-center items-center h-screen w-screen bg-cover bg-center relative"
     style={{
        backgroundImage:"url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070')"}} >

     <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative h-96 w-80 backdrop-blur-md bg-white/10 border border-gray-400/30 rounded-xl shadow-2xl flex flex-col gap-8 p-8">
            
            <form
            className='justify-center h-full flex flex-col gap-6'
            onSubmit={(e)=>{
             SubmitHandler(e) }}>

             <h1 className='text-center text-3xl font-semibold text-white tracking-wide'>Sign In</h1>
        
             <input
             type="Email"
             required
             className='h-10 w-full px-4 outline-none text-white bg-white/10 border border-gray-400/40 rounded-md placeholder-gray-300 focus:border-blue-400 transition'
             placeholder='Email'
             value={Email}
             onChange={(e)=>{
             setEmail(e.target.value)}}/>

                <input
                type="Password"
                required
                className='h-10 w-full px-4 outline-none text-white bg-white/10 border border-gray-400/40 rounded-md placeholder-gray-300 focus:border-blue-400 transition'
                placeholder='Password'
                value={Password}
                onChange={(e)=>{
                setPassword(e.target.value)}}/>

                <button
                type="submit"
                className="bg-blue-700 self-center cursor-pointer h-10 w-full text-white rounded-md hover:bg-blue-800 transition">
                Login
                </button>

            </form>
        </div>

     </div>
    </>
  )
}

export default Login