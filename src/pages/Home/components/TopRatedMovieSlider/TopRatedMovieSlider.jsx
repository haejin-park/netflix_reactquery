import React from 'react';
import { useTopRatedMoviesQuery } from '../../../../hooks/useTopRatedMovies';
import { Alert, Spinner } from 'react-bootstrap';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../constants/responsive';

const TopRatedMovieSlider = () => {
    const {isLoading, isError, error, data} = useTopRatedMoviesQuery();
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
    <MovieSlider movieListTitle="Top Rated Movies" movies={data} responsive={responsive}/>
  )
}

export default TopRatedMovieSlider
