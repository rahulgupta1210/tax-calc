
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

export const VideoBackground = ({ movieId }) => {
  const trailervideo = useSelector((store) => store.movies.trailerVideo);
  //const trailervideo = useSelector((store) => store.movies?.trailervideo)
  useMovieTrailer(movieId);
  console.log(trailervideo)
  //const id ='hR1-ihzff3I';
  const id ='S6HEH23W_bM';
  console.log("https://www.youtube.com/embed/" + id);

  //https://www.youtube.com/watch?v=S6HEH23W_bM&ab_channel=PragerU
  return (
    <div className='w-screen'>
      <iframe className='w-screen aspect-video'
        src={"https://www.youtube.com/embed/" + id + "?&autoplay=1&mute=1"}
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  )
}
