import React from 'react'
import { useForm } from "react-hook-form"
import Navbar from './Navbar'
import Footer from './Footer'

function Contact() {
    function handleClick(){
        navigate('/')
      }
    const {
        register,
        handleSubmit,
        
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
  return (
    <>
    <div>
    <Navbar />
    <div className=" flex items-center  dark:bg-slate-900 dark:text-white  justify-center pt-28 bg-white  mb-10 ">
        <div className="bg-white p-8 rounded-md dark:bg-slate-900 dark:text-white shadow-lg max-w-md w-full">
          <div className="flex justify-between">
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
         
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-4 space-y-2">
            <span>Name</span> <br />
            <input type="text" placeholder="Enter Your name" className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            {...register("name", { required: true })}
            /> <br />
            {errors.name && <span className="text-sm text-red-500">This field is required</span>}
          </div>
          <div className="mt-4 space-y-2">
            <span>Email</span> <br />
            <input type="Email" placeholder="Enter your email" className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
            {...register("email", { required: true })}
            />  <br />                 
            {errors.email && <span className="text-sm text-red-500">This field is required</span>}
          </div>
          <div className="mt-4 space-y-2">
            <span>Message</span> <br />
            <input type="message" placeholder="Type your message" className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
            {...register("message", { required: true })}
            />  <br />
            {errors.password && <span className="text-sm text-red-500">This field is required</span>}
          </div>
          <button className="bg-pink-600 text-white text-sm px-2 py-1 border rounded-md hover:bg-pink-700 duration-200">Submit</button>
          </form>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Contact