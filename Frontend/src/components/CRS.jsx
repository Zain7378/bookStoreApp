import React from 'react'
import Card from './Card';
import { Navigate, useNavigate } from 'react-router-dom';
function CRS({list}) {
    const navigate = useNavigate();
    const handleBtn = ()=>{
        navigate('/')
    }
  return (
    <>
    <div className='max-w-screen-2xl container  dark:bg-slate-900 dark:text-white px-4 md:px-20 mx-auto'>
        <div className='pt-28 items-center justify-center text-center'>
            <h1 className='text-2xl  md:text-4xl'>
                We're delighted to have you {" "}
                <span className='text-pink-500'>Here! :) </span>
            </h1>
            <p className='mt-10'>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid tempora id dolores praesentium minima voluptate! Officiis quos odio voluptas asperiores unde aut mollitia totam blanditiis quis ut consequuntur deserunt commodi quibusdam aspernatur autem, vel magni numquam, laudantium ab eaque dolorum deleniti. Ratione quisquam quibusdam excepturi illum beatae architecto esse amet.
            </p>
            <div>
            <button className="btn mt-7 font-medium btn-secondary hover:bg-pink-700 duration-300" onClick={handleBtn}>Back</button>
            </div>
        </div>
        <div className='mt-10 grid grid-cols-1 md:grid-cols-4'>
            {list.map((item)=>(
                <Card item={item} />
            ))}
        </div>
    </div>
    </>
  )
}

export default CRS