import React from 'react';
import {MdDesignServices} from "react-icons/md";
import {FcMultipleDevices} from "react-icons/fc";
import {FaConnectdevelop} from "react-icons/fa";


const Services = () => {
  return (
    <div className='mt-10'>
<h2 className="text-center text-4xl text-success">My Services</h2>

<div className='grid lg:grid-cols-3 lg:gap-4 xs:gap-1 m-8 text-accent'>
      
<div className=' card shadow-xl text-center py-2 lg:my-6  xs:my-2 border-solid border-2 border-warning '>
  <h1 className='text-4xl mx-auto mb-2'><MdDesignServices/></h1>
  <h1>Design</h1>
  <h1 className='mb-2'>Figma, Photoshop etc.</h1>
  <button className='btn w-1/3 btn-info mx-auto mb-4'>Learn More</button>
</div>

<div className=' card shadow-xl text-center py-2 lg:my-6  xs:my-2 border-solid border-2 border-warning '>
  <h1 className='text-4xl mx-auto mb-2'><FcMultipleDevices/></h1>
  <h1>Developer</h1>
  <h1 className='mb-2'>React, Html, Css, Javascript</h1>
  <button className='btn w-1/3 btn-info mx-auto mb-4'>Learn More</button>
</div>

<div className=' card shadow-xl text-center py-2 lg:my-6  xs:my-2 border-solid border-2 border-warning '>
  <h1 className='text-4xl mx-auto mb-2'><FaConnectdevelop/></h1>
  <h1>UI/Ux</h1>
  <h1 className='mb-2'>Design of a user interface and experience, designed for mobile devices, desktop screens, and more.</h1>
  <button className='btn w-1/3 btn-info mx-auto mb-4'>Learn More</button>
</div>


</div>
    </div>
    
    
  );
};

export default Services;