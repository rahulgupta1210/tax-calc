import React,{ useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieOption } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/moviesSlice";
 const useNowPlayingMovies = ()=>{
      //fetch data from movies API and update in to the store
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector(store=>store.movies.nowPlayingMovies);

  const getNowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', movieOption);
    const json = await data.json();
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies()
  }, [])
}

export default useNowPlayingMovies;