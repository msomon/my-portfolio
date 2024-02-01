import React from 'react';
import img1 from '../../image/manufacture2.jpg'
import img2 from '../../image/somon electronics2.jpg'
import img3 from '../../image/photographer2.jpg'
import { Link } from 'react-router-dom';
import './Portfolio.css'

const Portfolio = () => {
  return (
    <div className='lg:mx-10 mt-10 bg-accent'>
      <h1 className='pt-10 mb-5 text-center text-3xl font-bold text-neutral'>My Recent Projects </h1>
      <div className='grid w-full lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  mb-10 text-black'>
      <div className='card bg-base-100 shadow-xl  xs:ml-2 mt-4 mb-6'>
        <div className=''>
        <img className='h-80 mt-5 xs:w-[320px] mx-auto rounded-[10px] ' src={img1} alt="" />
        </div>
        <h1 className='mt-2 mb-2 text-2xl text-center'>Manufecturer Website </h1>
        <Link className='text-center' to='/manufecturer'><button className='btn btn-primary mt-2 mb-4'> Details </button></Link>
      </div>
      <div className='card bg-base-100 shadow-xl xs:ml-2 mt-4 mb-6'>
        <img className='h-80 mt-5 rounded-[10px] xs:w-[320px] mx-auto' src={img2} alt="" />
        <h1 className='mt-2 mb-2 text-2xl text-center'>Warehouse Website </h1>
        <Link className='text-center' to='/Warehouse'><button className='btn btn-primary mt-2 mb-4 '> Details </button></Link>
      </div>
      <div className='card bg-base-100 shadow-xl xs:ml-2 mt-4 mb-6'>
        <img className='h-80 mt-5 rounded-[10px] xs:w-[320px] mx-auto' src={img3} alt="" />
        <h1 className='mt-2 mb-2 text-2xl text-center'>Photographer Website </h1>
        <Link className='text-center' to='/photographer'><button className='btn btn-primary mt-2 mb-4 '> Details </button></Link>
      </div>
      
    </div>
    </div>
  );
};

export default Portfolio;