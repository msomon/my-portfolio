import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../image/photographer2.png'
import Footer from '../Sheared/Footer';

const Photographer = () => {
  return (
    <div>
      <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
      <div className=' h-80vh lg:mx-auto card lg:w-[650px]  bg-base-100 shadow-xl p-10 mt-8 mb-10 xs:order-last'>
       <img src={img1} alt="" />
      </div>

   <div className='lg:h-[660px] lg:mx-auto card lg:w-[650px] bg-base-100 shadow-xl p-10 mt-8 mb-10 gap-2 xs:order-first '>
      <h1 className='text-3xl lg:text-center text-secondary font-bold'>Electronics Photographer Website</h1>
      <h1 className='text-2xl'><span className='font-bold'> Github Code </span>:https://github.com/msomon/photographer-somon </h1>
      <h1 className='text-2xl'> <span className='font-bold'>Live Site </span>:https://photographer-somon.web.app/ </h1>
      <h1 className='text-2xl'>Feature : </h1>
• Implement a beautifull user interface with tailwind <br />
• Authentication system implement by firebase google, email -password. <br />
• Dashboard section gives different features for user and admin. <br />
• Normal user can order product and given review. <br />
  Technology : React-Router , Tailwind , DaisyUI , Firebase ,React,Firebase-Hooks , React-Hook-Form, React-Query , Toastify … 
  <Link to='/home'><button className='btn btn-accent btn-lg mt-2'>Back To Home</button></Link>

    </div>

    </div>

    <Footer></Footer>
    </div>
  );
};

export default Photographer;