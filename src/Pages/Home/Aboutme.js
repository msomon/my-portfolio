import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Aboutme = () => {

  
  return (
    <div className='lg:h-[50vh]'>
      <motion.div animate={{ x: 100 }}
    whileHover={{
      scale: 1.3,
      transition: { duration: 1 },
    }}
    whileTap={{ scale: 0.9 }} class="card lg:mx-auto xs:w-3/4 lg:w-2/5 mt-[100px] mb-5  bg-success text-neutral shadow-xl ">
  <div class="card-body">
    <h2 class="card-title text-3xl">About Me </h2>
    <p>My name Is sumon Ahamed . I am a Junior Web Developer . My coding is clean and pixel perfect .My all webSite are responsive which is given smooth experience for all user . I am working with React, NodeJs, ExpressJs, MongoDB ,Html5, Css3 etc. <div className=""></div></p>
    <div class="card-actions justify-center">
      <Link to='/contactme'><button class="btn btn-primary">Contact Now </button></Link>
    </div>
  </div>
</motion.div>
    </div>
  );
};

export default Aboutme;