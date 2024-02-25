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

const LoginForm = () => {

    const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem("RandomGameAuth")) || false)
    const navigate = useNavigate();

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

  return (
    <div className='grid justify-center py-20'> 
        <Card color="transparent" shadow={false} className='border border-black rounded-md p-5'>
      <Typography variant="h4" color="blue-gray" className='text-center'>
        Sign In
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Name
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button className="mt-6" fullWidth>
          sign up
        </Button>
        <Button className='flex gap-2 border border-black p-2 rounded-md bg-black' onClick={handleLogin}>
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