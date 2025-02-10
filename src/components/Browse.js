import React, { useEffect } from 'react';
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  const showgptSearch = useSelector((store) => store.gpt.showgptSearch);

  useNowPlayingMovies();

  return (
    <div>
      <Header />
      {showgptSearch ? (<GptSearch />
      ) : (
        <>
          <MainContainer />
          {/* <SecondaryComponent /> */}
        </>
      )}
    </div>
  )
}

export default Browse