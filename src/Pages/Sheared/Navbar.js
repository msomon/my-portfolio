
import {  NavLink} from 'react-router-dom';
import { AiOutlineHome} from "react-icons/ai";
import {MdOutgoingMail} from "react-icons/md";
import {BsFilePerson} from "react-icons/bs";
import {GiPodiumWinner} from "react-icons/gi";

const Navbar = () => {
    

  const menuItems = <>
        <li className='text-3xl text-primary'><NavLink to="/home"><AiOutlineHome/></NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/aboutme">About <BsFilePerson/></NavLink></li>
        <li><NavLink to="/blogs">Blogs </NavLink></li>
        <li><NavLink to="/contactme">Contact<MdOutgoingMail/></NavLink></li>
       
        </>


    return (
        <div className="navbar text-neutral bg-base-100 sticky top-0 z-30 ">
            <div className="navbar-start text-2xl mx-auto">
                    <h1 className='font-bold hidden lg:block text-3xl'><GiPodiumWinner/> Sumon</h1>
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>MANUBAR
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 t p-2 shadow bg-base-100 rounded-box w-62">
                        {menuItems}
                        
                    </ul>
                </div>
            
            </div>
                
            <div className="navbar-center mx-auto hidden lg:flex text-xl mb-4">
            
                <ul className="menu menu-horizontal p-0 ">
                    {menuItems}
                    
                </ul>

            </div>
                
           
        </div>
  );
};

export default Navbar;