import React from 'react'

function Card({item}) {
    console.log(item);
  return (
    <>
    <div className='mt-4 mb-7 p-3 md:hover:scale-125 duration-300 cursor-pointer dark:bg-slate-900 dark:text-white'>
    <div className="card bg-base-100 w-91 shadow-xl  dark:bg-slate-900 dark:text-white dark:border ">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="badge badge-outline hover:bg-pink-500 duration-300 hover:text-white px-3 py-3 ">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Card