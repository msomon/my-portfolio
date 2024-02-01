import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../image/photographer2.jpg'
import {useEffect} from 'react'


const Photographer = () => {

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <div>
      <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
      <div className=' h-80vh lg:mx-auto card lg:w-[500px] bg-base-100 shadow-xl p-10 mt-8 mb-10 order-last'>
       <img src={img1} alt="" />
      </div>

   <div className='lg:h-[660px] lg:mx-auto card lg:w-[500px] bg-base-100 shadow-xl p-10 mt-8 mb-10 gap-2 order-first '>
      <h1 className='text-3xl lg:text-center text-secondary font-bold'>Photographer Website</h1>

      <div className='grid lg:grid-cols-3 sm:grid-cols-1 mt-4 mb-2 text-primary'>
      <h1 className='text-2xl'><a href='https://github.com/msomon/photographer-somon'><span className='font-bold'> Github Code </span></a></h1>
      <h1 className='text-2xl'><a href='https://photographer-somon.web.app/'><span className='font-bold'>Live Site </span></a>  </h1>

      </div>

      <div className='text-black'>
      <h1 className='text-2xl'>Feature : </h1>
• Implement a beautifull user interface with tailwind <br />
• Authentication system implement by firebase google, email -password. <br />
• Dashboard section gives different features for user and admin. <br />
• Normal user can order product and given review. <br />
  Technology : React-Router , Tailwind , DaisyUI , Firebase ,React,Firebase-Hooks , React-Hook-Form, React-Query , Toastify … 
</div>

  <Link to='/home'><button className='btn btn-accent btn-lg mt-2'>Back To Home</button></Link>

    </div>

    </div>

    </div>
  );
};

export default Photographer;