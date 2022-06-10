import React from 'react';
import img1 from '../../image/manufacture.png'
import img2 from '../../image/somon electronics.png'
import img3 from '../../image/photographer.png'
import { Link } from 'react-router-dom';
import './Portfolio.css'
import Footer from '../Sheared/Footer';

const Portfolio = () => {
  return (
    <div>
      <h1 className='mt-6 mb-5 text-center text-3xl font-bold text-neutral'>My Recent Projects </h1>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  border-2 rounded-lg mb-10 bg-info z-10'>
      <div className='card w-96 bg-base-100 shadow-xl mx-auto xs:ml-2 mt-4 mb-6'>
        <div className='image'>
        <img className='h-80 rounded-[10px] ' src={img1} alt="" />
        </div>
        <h1 className='mt-2 mb-2 text-2xl text-center'>Manufecturer Website </h1>
        <Link to='/manufecturer'><button className='btn btn-primary mt-2 mb-4 ml-[120px]'> Details </button></Link>
      </div>
      <div className='card w-96 bg-base-100 shadow-xl mx-auto xs:ml-2 mt-4 mb-6'>
        <img className='h-80 rounded-[20px]' src={img2} alt="" />
        <h1 className='mt-2 mb-2 text-2xl text-center'>Warehouse Website </h1>
        <Link to='/Warehouse'><button className='btn btn-primary mt-2 mb-4 ml-[120px]'> Details </button></Link>
      </div>
      <div className='card w-96 bg-base-100 shadow-xl mx-auto xs:ml-2 mt-4 mb-6'>
        <img className='h-80 rounded-[20px]' src={img3} alt="" />
        <h1 className='mt-2 mb-2 text-2xl text-center'>Photographer Website </h1>
        <Link to='/photographer'><button className='btn btn-primary mt-2 mb-4 ml-[120px] '> Details </button></Link>
      </div>
      
    </div>
    <Footer></Footer>
    </div>
  );
};

export default Portfolio;