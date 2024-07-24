import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Routes/Home'
import { Routes,Route } from 'react-router-dom'
import Courses from './Routes/Courses'
import SignUp from './components/SignUp'
import Contact from './components/Contact'


function App() {


  return (
    <>
 <div className='dark:bg-slate-900 dark:text-white'>
 <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Courses' element={<Courses />} />         
    <Route path='/contact' element={<Contact />} />         
    <Route path='/signup' element={<SignUp />} />
  </Routes>
 </div>
    </>
  )
}

export default App
