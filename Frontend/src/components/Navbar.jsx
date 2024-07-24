import React from "react";
import {useState , useEffect} from 'react'
import { NavLink } from "react-router-dom";
import Modal from "./Modal";
function Navbar() {

  const menuIcons = (
  
        <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-indigo-600 text-lg  font-medium" : "text-gray-700 text-lg font-medium dark:text-white dark:hover:text-slate-400 hover:text-gray-900"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/courses"
          className={({ isActive }) =>
            isActive ? "text-indigo-600 text-lg font-medium" : "text-gray-700 text-lg font-medium dark:text-white dark:hover:text-slate-400 hover:text-gray-900"
          }
        >
          Courses
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-indigo-600 text-lg font-medium" : "text-gray-700 text-lg dark:text-white dark:hover:text-slate-400 font-medium hover:text-gray-900"
          }
        >
          Contact
        </NavLink>
      </li>
     
    </>
    
  );
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };
  const [ theme , setTheme] = useState(localStorage.getItem('theme')?localStorage.getItem('theme'):'light')
  const element = document.documentElement;
  useEffect(()=>{
    if(theme==='dark'){
      element.classList.add('dark');
      localStorage.setItem('theme' , 'dark');
      document.body.classList.add('dark');
    }
    else{
      element.classList.remove('dark');
      localStorage.setItem('theme' , 'light');
      document.body.classList.remove('dark');
    }
  },[theme]);
const [sticky , setSticky] =  useState(false);
useEffect(()=>{
  const handleScroll = ()=>{
    if(window.scrollY>0){
      setSticky(true)
    }
    else{
      setSticky(false)
    }
  }
  window.addEventListener('scroll' , handleScroll);
  return ()=>{
    window.removeEventListener('scroll' , handleScroll)
  }
})

  return (
    <>
      <div className={`max-w-screen-2xl container mx-auto px-4 md:px-20 ld:px-6 fixed top-0 left-0 right-0 z-5 dark:bg-slate-900 dark:text-white0  ${sticky?'sticky-navbar shadow-md  dark:bg-slate-900 dark:text-white bg-base-200 duration-300 transition-all ease-in-out z-50'  :""} `}>
        <div className=" navbar   ">
          <div className="navbar-start ">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {menuIcons}
              </ul>
            </div>
            <a className=" text-2xl font-bolder  curson-pointer">BOOKSTORE</a>
          </div>
          <div className="navbar-end space-x-3">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{menuIcons}</ul>
            </div>
            <div className="hidden lg:block">
              <label className="input focus:outline-none  dark:bg-slate-900 dark:text-white flex items-center gap-2">
                <input type="text" className="grow focus:outline-none" placeholder="Search" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>
          <div className="">
          <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                className="theme-controller"
                value="synthwave"
              />

              {/* sun icon */}
              <svg
                className="swap-off h-7 w-7 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                onClick={()=>{
                  setTheme(theme==="light"?'dark':"light")
                }}
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on h-7 w-7 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                onClick={()=>{
                  setTheme(theme==="dark"?'light':"dark")
                }}
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
         
           <button className="bg-black text-white rounded-md hover:bg-slate-800 btn duration-300 cursor-pointer" onClick={openModal}>
              Log In
            </button>
           
          </div>
        </div>
        <Modal isVisible={isModalVisible} onClose={closeModal} />
      </div>
    </>
  );
}

export default Navbar;