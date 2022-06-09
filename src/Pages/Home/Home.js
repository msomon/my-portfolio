import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../image/sumon.jpg'
import Portfolio from '../Portfolio/Portfolio';
import Contuct from './Contuct';
const Home = () => {

 
  return (
    
    <div className='mt-24 mb-10'>
      <div className='grid lg:grid-cols-2 sm:grid-cols-1'>

<div className='my-2 lg:mx-auto xs:mx-auto xs:mb-12'>
  <h3 className='text-3xl font-bold '> Hi I am <br />
   <span className='text-yellow-400'>Sumon Ahamed</span> </h3>
  <p className='text-xl mt-2 align-center'>I am a Junior Web Developer.<br/> I am looking to take on more work <br /> and to increase my skills as a Web Developer.</p>
  <h4 className='text-sm mt-2'>PHONE : (+880)1748572428</h4>
  <h4 className='text-sm mt-2'>EMAIL :mdsumon123ahamed@gmail.com</h4>
  <h4 className='text-sm mt-2'>ADDRESS :Tangail,Bangladesh</h4>
  
</div>


<div className='items-center mx-auto'>

<img className='w-[350px] h-[350px] rounded-full' src={image} alt="" />
</div>
 </div>

<div className='mt-16'>
  <Portfolio></Portfolio>
</div>
 <div className='mt-20'>
   <Contuct></Contuct>
 </div>

    </div>
  );
};

export default Home;
