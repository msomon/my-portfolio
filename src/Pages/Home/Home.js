import React from 'react';
import image from '../../image/sumon.jpg'
import Portfolio from '../Portfolio/Portfolio';
import Aboutme from './Aboutme';
import Contuct from './Contact';
import { motion } from 'framer-motion';
import Typical from 'react-typical'
import Experience from './Experience';
import Services from './Services';

const Home = () => {

 
 
  return (
    
    <div className='mt-24 xs:mt-5 mb-22 '>
      <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 justify-items-center items-center lg:mx-20 xs:ml-2'>

   <div className='my-2 lg:mx-auto xs:ml-10 xs:mb-16 info'>
        
  <h3 className='text-3xl font-bold text-accent '> Hi I am <br />
   <span  className='text-yellow-500'>Sumon Ahamed</span> </h3>

   
   <div>
    
    <h3 className='text-xl mt-2 align-center text-accent'>I,m a 
   <span className='text-primary ml-2'> 
   {" "}
   <h1>
{" "}
<Typical
loop={Infinity}
steps={[
"Junior web developer",
2500,
"Mern stack developer",
2500,
"Javascript developer",
2500,

]}

/>
   </h1>
   

   </span>
  </h3>
  </div>
       
  <h4 className='text-sm mt-2 text-accent'>PHONE : (+880)1748572428</h4>
  <h4 className='text-sm mt-2 text-accent'>EMAIL : mdsumon123ahamed@gmail.com</h4>
  <h4 className='text-sm mt-2 text-accent'>ADDRESS : Tangail,Bangladesh</h4>
  <a className='' href="https://drive.google.com/file/d/1BYs6kYJ-BqTW6WJfMhDtfLtOFGMRpKE7/view?usp=sharing" download  target="_blank" ><button className='btn btn-primary mt-4'>Download Resume</button></a>
</div>
<div className='justifu-items center'>
<motion.div  whileHover={{
    scale: 1.2,
    transition: { duration: 1 },
  }}
  whileTap={{ scale: 0.9 }} className='items-center mx-auto xs:ml-4'>
<img className='w-[350px] h-[350px]  rounded-full' src={image} alt="" />
</motion.div>

</div>


 </div>
 <div>
   <Aboutme></Aboutme>
 </div>
 <Services></Services>
 
<Experience></Experience>

<div className='mt-8 bg-info'>
  <Portfolio></Portfolio>
</div>
 <div className='mb-5'>
   <Contuct></Contuct>
 </div>

    </div>
  );
};

export default Home;
