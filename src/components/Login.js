import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import {auth} from "../utils/firebase";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import {USER_AVATAR} from '../utils/constant';
import taxImage from '../Assets/tax1.jpeg'

const Login = () => {

    const [isSignINForm, setIsSignINForm] = useState(true);

    const [errorMessages, seterrorMessage] = useState(null);
    const dispatch = useDispatch();

    const email = useRef(null);
    const password = useRef(null);

    const handleSignIN = () => {
        console.log(email.current.value);
        console.log(password.current.value);
        const message = checkValidData(email.current.value, password.current.value);
        console.log(message)
        seterrorMessage(message);
        if (message) return;

        //signin and signup logic
        if (!isSignINForm) {
            //signup logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user,{
                        displayName: email.current.value,
                        photoURL:USER_AVATAR
                    }).then(()=>{
                        const {uid,email,displayName,photoURL} = auth.currentUser;
                        dispatch(addUser({
                            uid:uid,
                            email:email,
                            displayName:displayName,
                            photoURL:photoURL
                        }))
                    })
                   

                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    seterrorMessage(errorCode + "-" + errorMessage)
                    // ..
                });
        } else {
            //signin ogic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              seterrorMessage(errorCode + "-" + errorMessage)
            });
        }
    }

    function toggleSignInForm() {
        setIsSignINForm(!isSignINForm);
    }

    return (
        <div>
            <Header />
            <div className='absolute'>
                <img className='h-screen object-cover w-screen'
                src={taxImage}
                    alt='logo' />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='w-full md:w-1/5 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
                <h1 className='font-bold text-xl py-4'>{isSignINForm ? 'Sign In' : 'Sign Up'}</h1>
                {!isSignINForm && (<input type='text' placeholder='Full Name' className='p-2 my-2 w-full text-xl bg-gray-700' />)}

                <input type='text' ref={email} placeholder='Email Address' className='p-2 my-2 w-full bg-gray-700 text-xl' />
                <input type='password' ref={password} placeholder='Password' className='p-2 my-2 w-full bg-gray-700 text-xl' />
                <button className='p-2 my-4 bg-red-700 w-full rounded-lg' onClick={handleSignIN} ><p className='text-xl'>{isSignINForm ? 'Sign IN' : 'Sign UP'}</p></button>
                <p className='text-red-500 p-2 font-bold text-xl'>{errorMessages}</p>
                <p className='py-2 cursor-pointer font-bold text-xl ' onClick={toggleSignInForm}>
                    {isSignINForm ? ' New to The Portal? Sign Up Now' : 'Already registered Sign In now!!'}
                </p>

            </form>
        </div>
    )
}

export default Login;