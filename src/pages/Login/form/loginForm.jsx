import React, { useState } from 'react';
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
import googleLogo from '../../../assets/logos/google.png'
import { auth, GoogleProvider } from '../../../firebase/firebase';
import {signInWithPopup} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginForm = () => {

    const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem("RandomGameAuth")) || false)
    const navigate = useNavigate();

    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const handleLogin = ()=>{
        try{
            signInWithPopup(auth, GoogleProvider);
            localStorage.setItem("RandomGameAuth",true);
            console.log("User logged in successfully!")
            navigate("/creategame")
        }catch(error){
            console.error("Error logging the user", error)
        }     
    }

    const handleEmailLogin = (event) => {
      event.preventDefault()
      try {
        signInWithEmailAndPassword(auth, userEmail, userPassword);
      localStorage.setItem("RandomGameAuth",true);
      console.log("Login Successful");
      navigate("/creategame")
      } catch (error) {
        console.log("Invalid Credentials")
      }
      
    }

  return (
    <div className='grid justify-center py-20'> 
        <Card color="transparent" shadow={false} className='border border-black rounded-md p-5'>
      <Typography variant="h4" color="blue-gray" className='text-center'>
        Sign In To Hapud
      </Typography>
  
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleEmailLogin}>
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900 py-1 px-2"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            onChange={(e)=>setUserEmail(e.target.value)}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900 py-1 px-2"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            onChange={(e)=>setUserPassword(e.target.value)}
          />
        </div>
        <button type="submit" className='border border-black text-black hover:bg-black hover:text-white hover:duration-300 w-full mt-5 py-1 px-2 rounded-md'>Login</button>
        <hr className='mt-10 mb-2'/>
        <h5 className='py-2 text-center'>Try other login options</h5>
        <Button className='flex gap-2 border border-black p-2 rounded-md bg-black w-full justify-center' onClick={handleLogin}>
        <img src={googleLogo} alt="Google Login" className='h-5 w-5' /><p className=''>Google Login</p>
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <a href="#" className="font-medium text-gray-900">
            Sign In
          </a>
        </Typography>
      </form>
    </Card>
    </div>
    
  )
}

export default LoginForm