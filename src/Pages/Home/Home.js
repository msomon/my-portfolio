import React from 'react';
import image from '../../image/images (3).jfif'
import Portfolio from '../Portfolio/Portfolio';
import Contuct from './Contuct';
const Home = () => {
  return (
    
    <div className='bg-[9EB1DC] mt-10 mb-10'>
      <div className='grid grid-cols-2'>

<div className='my-2 justify-center'>
  <h3 className='text-3xl font-bold '> Hi I am <br />
   <span className='text-yellow-400'>Sumon Ahamed</span> </h3>
  <p className='text-xl mt-2 align-center'>I am a Junior Web Developer. I am looking to take on more work <br /> and to increase my skills as a Web Developer.</p>
  <h4 className='text-sm mt-2'>PHONE : (+880)1748572428</h4>
  <h4 className='text-sm mt-2'>EMAIL : (+880)1748572428</h4>
  <h4 className='text-sm mt-2'>ADDRESS : (+880)1748572428</h4>
  <h4 className='text-sm mt-2'>SOCIAL : (+880)1748572428</h4>
</div>


<div className='items-center'>

<img src={image} alt="" />
</div>
 </div>

<div className='mt-6'>
  <Portfolio></Portfolio>
</div>
 <div>

   <Contuct></Contuct>
 </div>

    </div>
  );
};

export default Home;
