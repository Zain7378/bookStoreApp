import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Routes/Home'
import { Routes,Route, Navigate } from 'react-router-dom'
import Courses from './Routes/Courses'
import SignUp from './components/SignUp'
import Contact from './components/Contact'
import {Toaster} from 'react-hot-toast';
import { useAuth } from './components/AuthProvider'

function App() {
const [authUser , setAuthUser] = useAuth();


  return (
    <>
 <div className='dark:bg-slate-900 dark:text-white'>
 <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Courses' element={authUser?<Courses />:<Navigate to='/signup'/>} />         
    <Route path='/contact' element={<Contact />} />         
    <Route path='/signup' element={<SignUp />} />
  </Routes>
  <Toaster />
 </div>
    </>
  )
}

export default App
