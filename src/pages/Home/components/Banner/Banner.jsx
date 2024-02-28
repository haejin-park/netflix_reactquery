import React, { useState } from 'react'
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies'
import MovieVideoModal from '../../../../common/MovieVideoModal/MovieVideoModal';
import { Button } from 'react-bootstrap';
import "./Banner.style.css";

const Banner = ({movieDetailData}) => {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const {data} = usePopularMoviesQuery();
  function handleShow() {
    setFullscreen(true);
    setShow(true);
  }

  return (
    <div style={
      movieDetailData?.backdrop_path? {
        backgroundImage:
        movieDetailData.backdrop_path &&
          "url(" +
          `https://media.themoviedb.org/t/p/w533_and_h300_bestv2${movieDetailData.backdrop_path}` +
          ")",
        }
        :
        {
        backgroundImage:
        data?.results[0].poster_path &&
          "url(" +
          `https://media.themoviedb.org/t/p/w533_and_h300_bestv2${data?.results[0].poster_path}` +
          ")",
        }
    }
      className="banner" 
    >
      <div className="banner-info">
        {movieDetailData?.title ? <h1>{movieDetailData?.title}</h1> : <h1>{data?.results[0].title}</h1>}
        {movieDetailData?.overview ? <p>{movieDetailData?.overview}</p> : <p>{data?.results[0].overview}</p>}
        {movieDetailData && 
          <>
            <Button className="play-btn" onClick={handleShow} size="lg">Play</Button>
            <MovieVideoModal movieId={movieDetailData?.id} show={show} fullscreen={fullscreen} setShow={setShow}/>
          </>
        }
      </div>
    </div>
  )
}

export default Banner
