import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Authentication/Provider';

const Navbar = () => {
    const {LogOut,user}=useContext(AuthContext)
    const handleLogOut=()=>{
        console.log('clicked')
        LogOut()
        .then(() => {})
        .catch((error) => {
          console.log(error.message);
        });
    }
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
      <li><Link to='/'>Home</Link></li>
        <li ><Link to='/about'>About</Link></li>
        <li ><Link to='/dashboard'>Dashboard</Link></li>
        <li ><Link to='/login'>Login</Link></li>
        <li ><Link to='/signup'>Signup</Link></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">HouseOfDishes</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-semibold">
    <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/dashboard'>Dashboard</Link></li>
     
    </ul>
  </div>
  <div className="navbar-end font-semibold">
  <ul className='flex items-center gap-4 mr-4'>
  {
        user?   <li><Link to='/' onClick={handleLogOut}>Logout</Link></li> : <>  <li><Link to='/login'>Login</Link></li>
        <li><Link to='/registration'>Signup</Link></li></>
      }</ul>
  </div>
</div>
        </div>
    );
};

export default Navbar;