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

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleDateString();
    }

    return (
        <div className='block w-full'>
            {
                gameData && gameData
                    .slice(1) // Skip the first document
                    .slice(0, 5) // Then take the next 5 documents
                    .map((game) => (
                        <div className='flex justify-between my-2 p-2 border rounded-md border-white' key={game.id}>
                            <div className='w-3/4 block'>
                                <h4 className='font-semibold text-white'>{game?.title}</h4>
                                <div className='flex gap-2 items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-white">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                    </svg>
                                    <p className='text-xs text-white'>{formatDate(game?.createdAt.toDate())}</p>
                                </div>
                                <div className='flex gap-5'>
                                    <p className='text-xs text-white'>Start: {game?.gameTime}</p>
                                    <p className='text-xs text-white'>Start: {game?.resultTime}</p>
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
