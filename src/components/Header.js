import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';




const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const showGptSearch = useSelector((state) => state.gpt.showgptSearch);
    const handleSignOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
            // An error happened.
            navigate("/error")
        });
    };
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL
                })
                );
                navigate('/browse')
                // ...
            } else {
                // User is signed out
                dispatch(removeUser());
                navigate('/')
                // ...
            }
        });
        //this unsubscribe will be called when component is unmount
        return () => unsubscribe();
    }, [])


    const handleGptSearchClick = () => {
        //Toggle GPT search
        dispatch(toggleGptSearchView());
    }
    const handleLanguageChange = (e) => {
        console.log(e.target.value);
        dispatch(changeLanguage(e.target.value));
    }

    return (
        <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex flex-col md:flex-row justify-center md:justify-end' >


            {user && (
                <div className='flex p-2 justify-end'>
                    <button className='py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg text-sm' onClick={handleGptSearchClick}>
                        {showGptSearch ? 'Home Page' : 'Tax -Page'}
                    </button>
                    <button className='py-2 px-4 mx-4 my-2 bg-red-500 text-white rounded-lg text-sm' onClick={handleSignOut}>Sign Out</button>
                </div>
            )}
        </div>

    )
}

export default Header;