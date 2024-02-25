import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black p-10'>
      <div className='block border-t border-white px-5 py-10 sm:flex sm:justify-evenly'>
        <div className='block'><h4 className='text-white'>About</h4></div>
        <div className='block'><h4 className='text-white'>Quick Links</h4></div>
        <div className='block'><h4 className='text-white'>Contact Us</h4></div>
      </div>
    </div>
  )
}

export default Footer