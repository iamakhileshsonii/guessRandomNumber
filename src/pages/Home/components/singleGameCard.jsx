import React from 'react';
import { useDataContext } from '../../../context/dataContext';

const SingleGameCard = () => {
    const { gameData, gameDataLoading, error } = useDataContext();
    
    if (gameDataLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className='block w-full'>
            {
                gameData && gameData.slice(1).map((game) => ( // Starting from the second element
                    <div className='flex justify-between my-2 p-2 border rounded-md border-white' key={game.id}>
                        <div className='w-3/4 block'>
                            <h4 className='font-semibold text-white'>{game?.title}</h4>
                            <div className='flex gap-5'>
                                <p className='text-xs text-white'>Start: {game?.gameTime} </p>
                                <p className='text-xs text-white'>Start: {game?.resultTime} </p>
                            </div>
                        </div>
                        <div className='w-1/4'>
                            <h4 className='font-bold text-white text-2xl text-center self-center'>{game?.gameNumber}</h4>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default SingleGameCard;
