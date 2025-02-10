import React from 'react'
import GptSearchBar from './GptSearchBar'
import { BG_URL } from '../utils/constant'
import imgUrl from '../Assets/tax1.jpeg'

const GptSearch = () => {
  return (
    <>
      <div className='w-screen absolute -z-10'>
        <img src={imgUrl} className='h-screen object-cover w-screen'
          alt='logo' />
      </div>
      <div className='pt-[30%] md:p-0 w-300'>
        <GptSearchBar />
        {/* <GptMovieSuggestion /> */}
      </div>
    </>
  )
}

export default GptSearch