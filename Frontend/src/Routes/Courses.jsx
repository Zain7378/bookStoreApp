import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CRS from '../components/CRS'
import List from '../../public/list.json'
function Courses() {
    console.log(List);
  return (
    <div>
        <>
        <Navbar />
        <div className='min-h-screen'>
            <CRS list={List} key={List.id} />
        </div>
        <Footer />
        </>
    </div>
  )
}

export default Courses