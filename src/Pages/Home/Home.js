import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../image/sumon.jpg'
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Sheared/Footer';
import Aboutme from './Aboutme';
import Contuct from './Contact';
const Home = () => {

 
  return (
    
    <div className='mt-24 mb-22'>
      <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>

<div className='my-2 lg:mx-auto xs:ml-6 xs:mb-16'>
  <h3 className='text-3xl font-bold '> Hi I am <br />
   <span className='text-yellow-400'>Sumon Ahamed</span> </h3>
   <p className='text-xl mt-2 align-center'>Junior Web Developer.</p>
  <h4 className='text-sm mt-2'>PHONE : (+880)1748572428</h4>
  <h4 className='text-sm mt-2'>EMAIL :mdsumon123ahamed@gmail.com</h4>
  <h4 className='text-sm mt-2'>ADDRESS :Tangail,Bangladesh</h4>
  <a className='' href="https://drive.google.com/file/d/1Kob1LbpufBgJFgCPBn2Igg83HFU_vv8f/view?usp=sharing" download  target="_blank" ><button className='btn btn-primary mt-4'>Download Resume</button></a>
</div>


<div className='items-center mx-auto xs:ml-4'>

<img className='w-[350px] h-[350px] rounded-full' src={image} alt="" />
</div>
 </div>
 <div>
   <Aboutme></Aboutme>
 </div>

<div className='mt-16'>
  
  <Portfolio></Portfolio>
</div>
 <div className='mt-20 mb-16'>
   <Contuct></Contuct>
 </div>

 <div>
<Footer></Footer>
 </div>
    </div>
  );
};

export default Home;
