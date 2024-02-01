
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Sheared/Navbar';
import Manufecturer from './Pages/Portfolio/Manufecturer';
import Warehouse from './Pages/Portfolio/Warehouse';
import Photographer from './Pages/Portfolio/Photographer';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contact from './Pages/Home/Contact';
import Portfolio from './Pages/Portfolio/Portfolio';
import Aboutme from './Pages/Home/Aboutme';
import Footer from './Pages/Sheared/Footer';
import Blogs from './Pages/Home/Blogs';

function App() {
  return (
    <div className=''>
      <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/home' element={<Home/>} ></Route>
      <Route path='/projects' element={<Portfolio/>} ></Route>
      <Route path='/aboutme' element={<Aboutme/>} ></Route>
      <Route path='/blogs' element={<Blogs/>} ></Route>
      <Route path='/contactme' element={<Contact/>} ></Route>
      <Route path='/manufecturer' element={<Manufecturer/>} ></Route>
      <Route path='/Warehouse' element={<Warehouse/>} ></Route>
      <Route path='/Photographer' element={<Photographer/>} ></Route>
    </Routes>
    <Footer></Footer>
   <ToastContainer/>
    </div>
  );
}

export default App;
