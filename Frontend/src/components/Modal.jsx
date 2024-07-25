// Modal.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form"
import {toast} from 'react-hot-toast'
const Modal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;
  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const userInfo ={
      fullname:data.fullname,
      email:data.email,
      password:data.password,
    }
    await axios.post('http://localhost:5000/user/login' , userInfo)
    .then((res)=>{
      console.log(res.data);
      if(res.data){
        toast.success('Login  successfully');
       
      }
      setTimeout(()=>{
        window.location.reload();
      },500)
      {!isVisible}
      localStorage.setItem('users' , JSON.stringify(res.data.user))
    }).catch((err)=>{
      if(err.response){
        console.log(err);
        toast.error("Error: " + err.response.data.message)
      }
    })

  }

  return (
    <div className="fixed inset-0 flex items-center  justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-md  dark:bg-slate-900 dark:text-white shadow-lg max-w-md w-full">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold mb-4">Login</h2>

          <Link to='/'
            className="px-4 py-3 text-sm  border-black rounded-full  hover:bg-slate-300 dark:border dark:hover:bg-slate-600 duration-300"
            onClick={onClose}
          >
            close
          </Link>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-4  space-y-2">
            <span>Email</span> <br /> 
            <input type="email" placeholder="Enter Your Email" className="w-80 border  dark:text-black my-2 rounded-md px-3 outline-none" 
            {...register("email", { required: true })}
            /> <br />
            {errors.email && <span className="text-sm text-red-500">This field is required</span>}
        </div>
        <div className="mt-4  space-y-2">
            <span>Password</span> <br /> 
            <input type="Password" placeholder="Enter Your Password" className="w-80 border  dark:text-black my-2 rounded-md px-3 outline-none"
            {...register("password", { required: true })}
            /> <br />
            {errors.password && <span className="text-sm text-red-500">This field is required</span>}
        </div>
        <div className="flex justify-between px-1 align-middle mt-5">
            <button type="submit" className="bg-pink-600 text-white text-sm px-2 py-1 border rounded-md hover:bg-pink-700 duration-200">Log In</button>
            <p className="text-sm">Not registered?<Link to='/signup' className="underline text-blue-500">Sign in</Link></p>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
