import React from 'react';
import SingleGameCard from './singleGameCard';

const GameBoard = () => {


  return (
    <div className='my-50 p-5 md:px-96'>
    
        <div className='block bg-glass rounded-sm'></div>
            
        <div className='w-full p-5 rounded-md my-10 bg-glass'>
            <h2 className='text-white text-xl font-semibold text-center'>Results</h2>
            <SingleGameCard />
        </div>

    </div>

  )
}

export default GameBoard