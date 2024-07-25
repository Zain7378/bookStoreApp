import React from 'react'
import { useAuth } from './AuthProvider'
import toast from 'react-hot-toast';

export default function Logout() {
    const [authUser , setAuthUser] = useAuth();
    const handleLogout = () =>{
        try {
            setAuthUser({
                ...authUser,
                user:null,
            });
            localStorage.removeItem('users');
            toast.success('Logout successfully');
            setTimeout(()=>{
                window.location.reload();
            },500)
        } catch (error) {
            toast.error('Error :' + error);
        }
    }
  return (
   <button onClick={handleLogout} className='bg-red-500 text-white rounded-md hover:bg-slate-800 btn duration-300 cursor-pointer'>Log Out</button>
  )
}
