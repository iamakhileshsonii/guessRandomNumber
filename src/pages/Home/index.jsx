import React from 'react';
import GameBoard from './components/gameBoard';
import bg from '../../../src/assets/images/gameBg.jpeg'; // Assuming this is your background image
import { useDataContext } from '../../context/dataContext';

const Index = () => {
  return (
    <div className='bg-gradient-to-r from-black to-purple min-h-screen' style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className=' flex justify-center gap-2 py-10'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
        </svg>
        <h2 className='font-bold text-2xl text-white'>HAPUD</h2>
      </div>
      <div className='block p-10'>
        <h4 className='text-4xl font-bold text-center text-white p-2'>93</h4>
        <p className='text-white text-center text-xs px-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, amet.</p>
      </div>
      <GameBoard />
      <div className='p-5'>
        <h4 className='text-white font-semibold text-xl text-center py-5 underline underline-offset-4 decoration-yellow'>Join Us</h4>
        <div className='flex justify-evenly'>
          <div className='flex justify-evenly gap-3 bg-glass py-1 px-2 rounded-sm text-white'>Whatsapp</div>
          <div className='flex justify-evenly gap-3 bg-glass py-1 px-2 rounded-sm text-white'>Telegram</div>
        </div>
      </div>
    </div>
  )
}

export default Index
