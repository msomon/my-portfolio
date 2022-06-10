import React from 'react';
import { Link } from 'react-router-dom';

const Aboutme = () => {
  return (
    <div class="card lg:mx-auto lg:w-2/5 mt-[35px] bg-success text-neutral shadow-xl">
  <div class="card-body">
    <h2 class="card-title text-3xl">About Me </h2>
    <p>My name Is sumon Ahamed . I am a Junior Web Developer . My coding is clean and pixel perfect .My all webSite are responsive which is given smooth experience for all user . I am working with React, NodeJs, ExpressJs, MongoDB ,Html5, Css3 etc. <div className=""></div></p>
    <div class="card-actions justify-center">
      <Link to='/contactme'><button class="btn btn-primary">Contact Now </button></Link>
    </div>
  </div>
</div>
  );
};

export default Aboutme;