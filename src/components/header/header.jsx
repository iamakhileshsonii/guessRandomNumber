import React from 'react';
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";

const Header = () => {

  return (
   <div className='flex justify-between p-5'>
    <div className='block w-2/5'>Logo</div>
    <div className='flex'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 sm:hidden" >
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
    </svg>

      <ul className='hidden sm:flex gap-5'>
      <li>About</li>
      <li>Contact</li>
      <li>Rules</li>
      </ul>
    </div>
   </div>
  )
}

export default Header