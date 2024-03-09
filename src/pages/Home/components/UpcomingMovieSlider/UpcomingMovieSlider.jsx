import React from 'react';
import { useUpcomingMoviesQuery } from '../../../../hooks/useUpcomingMovies';
import { Alert, Spinner } from 'react-bootstrap';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../constants/responsive';

const UpcomingMovieSlider = () => {
    const {isLoading, isError, error, data} = useUpcomingMoviesQuery();
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
    <MovieSlider movieListTitle="Upcoming Movies" movies={data} responsive={responsive}/>
  )
}

export default UpcomingMovieSlider
