// SignUp.jsx
import React, { useState } from 'react';
import Modal from './Modal'; // Adjust the path if necessary
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast';
function SignUp() {
    const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  const openModal = () => {
    setIsModalVisible(true)};
  const closeModal = () => setIsModalVisible(false);
  function handleClick(){
    navigate('/')
  }
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
    await axios.post('http://localhost:5000/user/signup' , userInfo)
    .then((res)=>{
      console.log(res.data);
      if(res.data){
        toast.success('Sign up Successfully!');
        navigate('/')
      }
     
      localStorage.setItem('users' , JSON.stringify(res.data.user))
    }).catch((err)=>{
      if(err.response){
        console.log(err);
        toast.error("Error: " + err.response.data.message)
      }
    })

  }

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded-md dark:bg-slate-900 dark:text-white shadow-lg max-w-md w-full">
          <div className="flex justify-between">
            <h2 className="text-xl font-bold mb-4">Sign Up</h2>
            <button className="px-4 py-1 text-sm border-black rounded-full hover:bg-slate-300 dark:border dark:hover:bg-slate-600 duration-300" onClick={handleClick}>
              close
            </button>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-4 space-y-2">
            <span>Name</span> <br />
            <input type="text" placeholder="Enter Your name" className="w-80 border my-2 dark:text-black rounded-md px-3 outline-none"
            {...register("fullname", { required: true })}
            /> <br />
            {errors.fullname && <span className="text-sm text-red-500">This field is required</span>}
          </div>
          <div className="mt-4 space-y-2">
            <span>Email</span> <br />
            <input type="email" placeholder="Enter Your Email" className="w-80 border my-2  dark:text-black rounded-md px-3 outline-none" 
            {...register("email", { required: true })}
            />  <br />                 
            {errors.email && <span className="text-sm text-red-500">This field is required</span>}
          </div>
          <div className="mt-4 space-y-2">
            <span>Password</span> <br />
            <input type="Password" placeholder="Enter Your Password" className="w-80 border my-2  dark:text-black rounded-md px-3 outline-none" 
            {...register("password", { required: true })}
            />  <br />
            {errors.password && <span className="text-sm text-red-500">This field is required</span>}
          </div>
          <div className="flex justify-between px-1 align-middle mt-5">
            <button className="bg-pink-600 text-white text-sm px-2 py-1 border rounded-md hover:bg-pink-700 duration-200">Sign Up</button>
            <p className="text-sm">Already have an account? <button onClick={openModal} className="underline text-blue-500">Log In</button></p>
          </div>
          </form>
        </div>
      </div>

      {isModalVisible && (
        <Modal isVisible={isModalVisible} onClose={closeModal} />
      )}
    </>
  );
}

export default SignUp;
