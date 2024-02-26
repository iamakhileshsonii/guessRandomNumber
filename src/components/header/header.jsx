import React from 'react';
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';


const Header = () => {

  return (
   <div className='flex justify-center p-5'>
    <div>
      <Link to={'/creategame'}>
        <button className='bg-black text-white rounded-md px-2 py-1 hover:bg-white hover:text-black duration-300'>Create Game</button>
      </Link>
    </div>
   </div>
  )
}

export default Header