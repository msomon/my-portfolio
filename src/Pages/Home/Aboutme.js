import React from 'react';
import { Link } from 'react-router-dom';
import image from "../../image/sumon2 (1).jpg"
import './Home.css'
import {GiAchievement} from "react-icons/gi";
import {FiUsers} from "react-icons/fi";
import {BsFolderFill} from "react-icons/bs";

const Aboutme = () => {

  
  return (
   <div className=' lg:h-[55vh]  lg:mx-auto mt-20 mb-5 bg-success text-neutral shadow-xl'>
  
    <div className='grid lg:grid-cols-2 mt-15 items-center'>
      
   <div className='image xs:mt-5  lg:mt-10 lg:ml-20 ml-10 sm:mx-auto'>
   <img className=' lg:w-[750px] lg:h-[350px] xs:w-[500px] xs:h-[300px] rounded-lg' src={image} alt="Photo" />
   </div>

  <div className='lg:mt-10 sm:mt-5 xm:h-[650px] lg:h-[400px] card-body bg-base-100 shadow-xl rounded-lg flex-grow:0 mr-5'>

   <h2 className="text-4xl text-primary text-center">About Me </h2>
    <div className='grid lg:grid-cols-3 gap-2 mt-2 mb-2'>

<div className='experience card bg-secondary shadow-xl text-center py-2 my-2 border-solid border-2 border-indigo-500 '>
  <h1 className='text-4xl mx-auto mb-2'><GiAchievement/></h1>
  <h1>Experience</h1>
  <h1 className='mb-2 xs:mb-1'>1+ Years Working</h1>
</div>

<div className='experience card bg-secondary shadow-xl text-center py-2 my-2 border-solid border-2 border-indigo-500 '>
  <h1 className='text-4xl mx-auto mb-2'><FiUsers/></h1>
  <h1>Clients</h1>
  <h1 className='mb-2xs:mb-1'>100+ Worldwide</h1>
</div>

<div className='experience card bg-secondary shadow-xl text-center py-2 my-2  border-solid border-2 border-indigo-500 '>
  <h1 className='text-4xl mx-auto mb-2'><BsFolderFill/></h1>
  <h1>Projects</h1>
  <h1 className='mb-2 xs:mb-1'>20+ Completed</h1>
</div>




    </div>


    <h2 className='mb-0'>My name is sumon Ahamed . I am a Junior Web Developer . My coding is clean and pixel perfect .My all webSite are responsive which is given smooth experience for all users. I am working with React, Javascript, NodeJs, ExpressJs, MongoDB , Html5, Css3, Tailwind, Bootstrap etc. I love working with new technology.I have also errors solving skills. </h2>
      <Link to='/contactme'><button class="btn btn-primary mt-2">Contact Now </button></Link>
   </div>

    </div>

</div>

  );
};

export default Aboutme;