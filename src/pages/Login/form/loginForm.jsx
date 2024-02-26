import React, { useState } from 'react';
import {
    Card,
    Input,
    Typography,
} from "@material-tailwind/react";
import { auth } from '../../../firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const navigate = useNavigate();

    const handleEmailLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, userEmail, userPassword);
            console.log("Login Successful");
            localStorage.setItem("RandomGameAuth", true);
            navigate("/creategame");
        } catch (error) {
            console.error("Login Error:", error);
            alert("Invalid Credentials");
        }
    };

    return (
        <div className='grid justify-center py-20'> 
            <Card color="transparent" shadow={false} className='border border-black rounded-md p-5'>
                <Typography variant="h4" color="blue-gray" className='text-center'>
                    Sign In To Hapud
                </Typography>
                
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
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
                    <button type="button" className='border border-black text-black hover:bg-black hover:text-white hover:duration-300 w-full mt-5 py-1 px-2 rounded-md' onClick={handleEmailLogin}>
                        Login
                    </button>
                </form>
            </Card>
        </div>
    );
};

export default LoginForm;
