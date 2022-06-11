import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../image/somon electronics2.png'

const Warehouse = () => {
  return (
    <div>
      <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
      <div className=' h-80vh lg:mx-auto card lg:w-[650px] md:w-[750px]  bg-base-100 shadow-xl p-10 mt-8 mb-10 order-last '>
       <img src={img1} alt="" />
      </div>

   <div className='lg:h-[660px] lg:mx-auto card lg:w-[650px] bg-base-100 shadow-xl p-10 mt-8 mb-10 gap-2 order-fast '>
      <h1 className='text-3xl text-center text-secondary font-bold'>Electronics Warehouse Website</h1>

      <div className='grid lg:grid-cols-3 sm:grid-cols-1 mt-4 mb-2 text-primary'>
      <h1 className='text-2xl'><a href='https://github.com/msomon/electronics-warehouse-management-clint'><span className='font-bold'> Client Code </span></a></h1>
      <h1 className='text-2xl'><a href='https://github.com/msomon/electronics-warehouse-management-server'><span className='font-bold'> Server Code </span></a></h1>
      <h1 className='text-2xl'><a href='https://electronics-warehouse-59bbd.web.app'> <span className='font-bold'>Live Site</span></a> </h1>

      </div>
      <h1 className='text-2xl'>Feature : </h1>
• Implement a beautifull user interface with tailwind <br />
• Authentication system implement by firebase google, email -password. <br />
• Dashboard section gives different features for user and admin. <br />
• Normal user can order product and given review. <br />
  Technology : React-Router , Tailwind , DaisyUI , Firebase ,React,Firebase-Hooks , React-Hook-Form, React-Query , Toastify … 
  <Link to='/home'><button className='btn btn-accent btn-lg mt-2'>Back To Home</button></Link>

    </div>

    </div>
    </div>
  );
};

export default Warehouse;