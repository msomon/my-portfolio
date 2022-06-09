import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../image/somon electronics2.png'
const Warehouse = () => {
  return (
    <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
      <div className='overflow-y-auto h-80vh mx-auto card w-[650px] bg-base-100 shadow-xl p-10 mt-8 mb-10'>
       <img src={img1} alt="" />
      </div>

   <div className='h-80vh mx-auto card w-[650px] bg-base-100 shadow-xl p-10 mt-8 mb-10 gap-2'>
      <h1 className='text-3xl text-center text-secondary font-bold'>Electronics Manufecturer Website</h1>
      <h1 className='text-2xl'><span className='font-bold'>Client Code </span>:https://github.com/msomon/electronics-warehouse-management-clint </h1>
      <h1 className='text-2xl'><span className='font-bold'>Server Code </span>:https://github.com/msomon/electronics-warehouse-management-server </h1>
      <h1 className='text-2xl'><span className='font-bold'>Live Site</span> :https://electronics-warehouse-59bbd.web.app </h1>
      <h1 className='text-2xl'>Feature : </h1>
• Implement a beautifull user interface with tailwind <br />
• Authentication system implement by firebase google, email -password. <br />
• Dashboard section gives different features for user and admin. <br />
• Normal user can order product and given review. <br />
  Technology : React-Router , Tailwind , DaisyUI , Firebase ,React,Firebase-Hooks , React-Hook-Form, React-Query , Toastify … 
  <Link to='/home'><button className='btn btn-accent btn-lg mt-2'>Back To Home</button></Link>

    </div>

    </div>
  );
};

export default Warehouse;