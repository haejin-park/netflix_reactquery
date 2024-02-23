import React from 'react';
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies';
import { Alert, Spinner } from 'react-bootstrap';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import './PopularMovieSlider.style.css';
import { responsive } from '../../../../constants/responsive';

/*
영화 들고오기
캐루셀 적용하기
*/
const PopularMovieSlider = () => {
    const {isLoading, isError, error, data} = usePopularMoviesQuery();

    if(isLoading) {
      return (
        <div className="loading-spinner">
          <Spinner className="home-loading-spinner" animation="border" variant="danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )
    }
  
    if(isError) {
      return (
        <div className="error-alert">
          <Alert className="error-alert" variant="danger">
            {error.message}
          </Alert>
        </div>
      )
    }
  return (
    <MovieSlider movieListTitle="Popular Movies" movies={data} responsive={responsive}/>
  )
}

export default PopularMovieSlider
