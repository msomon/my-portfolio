import React from 'react';
import img1 from '../../image/manufacture.png'
import img2 from '../../image/somon electronics.png'
import img3 from '../../image/photographer.png'
import { Link } from 'react-router-dom';
const Portfolio = () => {
  return (
    <div className='grid grid-cols-3 border-2 rounded-lg mb-10 bg-[F9EEFE]'>
      <div className='mx-auto mt-4'>
        <img className='h-80 rounded-[10px]' src={img1} alt="" />
        <h1 className='mt-2 mb-2 text-2xl text-center'>Manufecturer Website </h1>
        <Link to='/manufecturer'><button className='btn btn-primary mt-2 mb-4 ml-[120px]'> Details </button></Link>
      </div>
      <div className='mx-auto mt-4'>
        <img className='h-80 rounded-[20px]' src={img2} alt="" />
        <h1 className='mt-2 mb-2 text-2xl text-center'>Warehouse Website </h1>
        <Link to='/Warehouse'><button className='btn btn-primary mt-2 mb-4 ml-[120px]'> Details </button></Link>
      </div>
      <div className='mx-auto mt-4'>
        <img className='h-80 rounded-[20px]' src={img3} alt="" />
        <h1 className='mt-2 mb-2 text-2xl text-center'>Photographer Website </h1>
        <Link to='/photographer'><button className='btn btn-primary mt-2 mb-4 ml-[120px]'> Details </button></Link>
      </div>
      
    </div>
  );
};

export default Portfolio;