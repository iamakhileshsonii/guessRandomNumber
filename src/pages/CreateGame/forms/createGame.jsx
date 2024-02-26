import React from 'react';
import { addDoc } from 'firebase/firestore';
import { auth, db } from '../../../firebase/firebase';
import { collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { Input } from '@material-tailwind/react';

const CreateGame = () => {

    const navigate = useNavigate();

    const timeSlots = ['12:00','12:30','01:00','01:30','02:00','02:30','03:00','03:30','04:00','04:30','05:00','05:30','06:00', '06:30','07:00','08:00','08:30','09:00','09:30','10:00','10:30', '11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30','15:00', '15:30','16:00','16:00','16:30','17:00','17:30','18:00','18:30', '19:00','19:30', '20:00','20:30','21:00','21:30','22:00','22:30','23:00','23:30','24:00'];
    

    const docRef = collection(db, 'game')

    function handleCreateGame(event){
        event.preventDefault();

        try {
            const createNewGame = {
                title: event.target.gameTitle.value,
                gameTime: event.target.gameTime.value,
                resultTime: event.target.gameResultTime.value,
                gameNumber: event.target.gameNumber.value,
                createdAt: new Date() 
                }

                addDoc(docRef, createNewGame);
                navigate("/")
                console.log("New game created");

        } catch (error) {
            console.log("Error creating a new game", error);
        }
        
    }

  return (

    <div className='grid justify-center p-5 m-5 sm:m-0 sm:px-96 sm:block'>
        <h2 className='w-full text-center font-bold text-2xl'>CREATE GAME</h2>
        <form onSubmit={handleCreateGame} className='block px-2 sm:p-5 border border-black rounded-md'>
        
        <h6 className='font-semibold mt-10 mx-2 text-left w-full'>Game Number</h6>
        <input type="text" placeholder='Eg: 90' className='p-2 m-2 border border-disable rounded-md w-96 sm:w-full' name='gameNumber'/>
        
        <h6 className='font-semibold mt-4 mx-2 text-left w-full'>Game Name</h6>
        <input type="text" value='Hapud' className='p-2 m-2 rounded-md w-96 sm:w-full bg-disable text-black' name='gameTitle' disabled/>
        
        <div className='flex justify-between m-2 sm:w-full'>
            <label htmlFor="gameEndTime" className='font-semibold'>Game Time</label>
            <select name="gameTime" className='underline'>
                {
                    timeSlots.map((time)=>(
                        <option value={`${time}`} key={time}> {time}</option>
                    ))
                }
                
            </select>
        </div>
        

        <div className='flex justify-between m-2 sm:w-full'>
            <label htmlFor="gameResultTime" className='font-semibold'>Result Time</label>
            <select name="gameResultTime" className='underline '>
                {
                    timeSlots.map((time)=>(
                        <option value={`${time}`} key={time}> {time}</option>
                    ))
                }
                
            </select>
        </div>
        
        <button type='submit' className='border border-black bg-white text-black hover:bg-black hover:text-white duration-300 py-1 px-2 my-2 rounded-md w-full' >Create Game!</button>
    </form>
    </div>
    
  )
}

export default CreateGame